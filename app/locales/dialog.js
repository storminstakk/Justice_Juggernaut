const { ConversationState, MemoryStorage, TurnContext } = require('botbuilder');
const { DialogSet, TextPrompt, ChoicePrompt, WaterfallDialog } = require('botbuilder-dialogs');
const en = require('./en');

const memoryStorage = new MemoryStorage(); // store conversation state in memory
const conversationState = new ConversationState(memoryStorage);
const dialogState = conversationState.createProperty('dialogState');

const dialogs = new DialogSet(dialogState);

dialogs.add(new TextPrompt('zipcodePrompt'));
dialogs.add(new ChoicePrompt('specializationPrompt'));

dialogs.add(new WaterfallDialog('attorney-finder', [
  async function (step) {
    await step.context.sendActivity('Welcome to the home of Justice Juggernaut!');
    return await step.prompt('zipcodePrompt', 'Please enter your zip code.');
  },
  async function (step) {
    const zipcode = step.result;
    const requestOptions = { zipcode };
    return await step.prompt('specializationPrompt', 'What type of specialization do you need?', ['Child Welfare law', 'Family law', 'Civil rights'], requestOptions);
  },
  async function (step) {
    const specialization = step.result.value;
    const zipcode = step.options.zipcode;

    if (specialization === 'Child Welfare law') {
      // Additional logic for Child Welfare law
      await step.context.sendActivity('As a Child Welfare advocate, I can provide you with information and support regarding child protection, foster care, and adoption. If you are a respondent parent seeking to regain custody of your children and restore parental rights, I can guide you through the legal process and provide resources specific to New Mexico. Together, we can make a difference for families in need.');
    } else if (specialization === 'Family law') {
      // Additional logic for Family law
      await step.context.sendActivity('As a Family law attorney, I can assist you with issues related to divorce, child custody, and child support. If you are a respondent parent in New Mexico fighting for your parental rights, I can help you understand the legal requirements and represent your case in court. Restoring family bonds and promoting the well-being of children is our ultimate goal.');
    } else if (specialization === 'Civil rights') {
      // Additional logic for Civil rights
      await step.context.sendActivity('As a Civil rights advocate, I am dedicated to fighting for the rights of individuals and families. If you believe your civil rights have been violated in the context of child welfare or family law, I can help you understand your legal options and provide guidance on pursuing a legal remedy. Together, we can work towards a more just and equitable society.');
    } else {
      // General response for other specializations
      await step.context.sendActivity(`You have selected ${specialization}. Unfortunately, I do not have specific information about that specialization. Is there anything else I can help you with?`);
    }

    return await step.endDialog();
  }
]));

module.exports = function (bot) {
  bot.on('conversationUpdate', async (context) => {
    const state = conversationState.get(context);
    const dialogContext = await dialogs.createContext(context);

    if (context.activity.type === 'message') {
      const { text } = context.activity;
      const result = await nlpManager.process('en', text);
      const topIntent = result.intent || 'None';
      const { entities } = result;

      if (topIntent === 'find-attorney') {
        await dialogContext.beginDialog('attorney-finder', entities.zipcode[0].option);
      } else {
        await dialogContext.cancelAllDialogs();
        await context.sendActivity(en.default.unknownMessage);
      }
    }
  });
};
