<div align="center">
<img src="./docs/images/icon.svg" alt="Preview"/>

<h1 align="center">Justice Juggernaut</h1>

Deploy your private Justice Juggernaut web application with just one click for free.

[Demo](https://justice-juggernaut.vercel.app/) / [Feedback Issues](https://github.com/storminstakk/Justice_Juggernaut/issues) / [Join Discord](https://discord.gg/zrhvHCr79N) / [QQ Group](https://user-images.githubusercontent.com/16968934/228190818-7dd00845-e9b9-4363-97e5-44c507ac76da.jpeg) / [Donate to Developers](https://user-images.githubusercontent.com/16968934/227772541-5bcd52d8-61b7-488c-a203-0330d8006e2b.jpg) / [Donate](#donate-usdt)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstorminstakk%2FJustice_Juggernaut&env=OPENAI_API_KEY&env=CODE&project-name=justice_juggernaut&repository-name=Justice_Juggernaut)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/storminstakk/Justice_Juggernaut)

![Main Interface](./docs/images/cover.png)

</div>

## Getting Started

1. Prepare your [OpenAI API Key](https://platform.openai.com/account/api-keys);
2. Click the button on the right to start deployment:
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstorminstakk%2FJustice_Juggernaut&env=OPENAI_API_KEY&env=CODE&project-name=justice_juggernaut&repository-name=Justice_Juggernaut), and log in directly with your Github account. Remember to fill in the API Key and [page access password](#configure-page-access-password) CODE on the environment variable page;
3. After deployment, you can start using it;
4. (Optional) [Bind a custom domain name](https://vercel.com/docs/concepts/projects/domains/add-a-domain): The DNS assigned by Vercel is polluted in some regions, and binding a custom domain name can connect directly.

## Keep Updating

If you have deployed your own project with one-click according to the above steps, you may find that there is always a "update available" prompt. This is because Vercel will create a new project for you by default instead of forking this project, which will cause the update to not be detected correctly.
It is recommended that you redeploy according to the following steps:

- Delete the original repository;
- Use the fork button in the upper right corner of the page to fork this project;
- Choose and deploy again in Vercel, [please see the detailed tutorial](./docs/vercel-cn.md#如何新建项目).

### Enable Automatic Updates

> If you encounter an Upstream Sync execution error, please manually Sync Fork once!

After forking the project, due to Github's restrictions, you need to manually enable Workflows on the Actions page of your forked project and enable the Upstream Sync Action to enable automatic updates every hour:

![Automatic Update](./docs/images/enable-actions.jpg)

![Enable Automatic Update](./docs/images/enable-actions-sync.jpg)

### Manually Update Code

If you want to update manually immediately, you can refer to [Github's documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) to learn how to synchronize the forked project with the upstream code.

You can star/watch this project or follow the author to get timely notifications of new feature updates.

## Configure Page Access Password

> After configuring the password, users need to manually fill in the access code on the settings page to chat normally, otherwise they will be prompted with an unauthorized status through the message.

> **Warning**: Be sure to set the password length long enough, preferably 7 digits or more, otherwise it will be [cracked](https://github.com/storminstakk/Justice_Juggernaut/issues/518).

This project provides limited access control functions. Please add an environment variable named `CODE` on the environment variable page of the Vercel project control panel, with a value of a custom password separated by English commas:

```
code1,code2,code3
```

After adding or modifying this environment variable, please **redeploy** the project to make the changes take effect.

## Environment Variables

> Most of the configuration items in this project are set through environment variables. Tutorial: [How to modify Vercel environment variables](./docs/vercel-cn.md).

### `OPENAI_API_KEY` (required)

OpanAI key, the api key you applied for on the openai account page.

### `CODE` (optional)

Access password, optional, you can use multiple passwords separated by commas.

**Warning**: If you do not fill in this item, anyone can directly use the website you deployed, which may cause your token to be consumed rapidly. It is recommended to fill in this option.

### `BASE_URL` (optional)

> Default: `https://api.openai.com`

> Examples: `http://your-openai-proxy.com`

OpenAI interface proxy URL, if you manually configure the OpenAI interface proxy, please fill in this option.

> If you encounter an SSL certificate issue, please set the protocol of `BASE_URL` to http.

### `OPENAI_ORG_ID` (optional)

Specify the organization ID in OpenAI.

### `HIDE_USER_API_KEY` (optional)

If you don't want users to fill in the API Key by themselves, set this environment variable to 1.

### `DISABLE_GPT4` (optional)

If you don't want users to use GPT-4, set this environment variable to 1.

## Development

> It is strongly recommended not to develop or deploy locally. Due to some technical reasons, it is difficult to configure the OpenAI API proxy locally, unless you can ensure that you can directly connect to the OpenAI server.

Click the button below to start secondary development:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/storminstakk/Justice_Juggernaut)

Before writing code, you need to create a `.env.local` file in the project root directory and fill in the environment variables:

```
OPENAI_API_KEY=<your api key here>
```

### Local Development

1. Install nodejs 18 and yarn, please ask ChatGPT for specific details;
2. Execute `yarn install && yarn dev`. ⚠️ Note: This command is only used for local development and should not be used for deployment!
3. If you want to deploy locally, please use the `yarn install && yarn start` command. You can use pm2 to guard the process to prevent it from being killed. For details, please ask ChatGPT.

## Deployment

### Container Deployment (Recommended)

> The Docker version needs to be 20 or above, otherwise it will prompt that the image cannot be found.

> ⚠️ Note: The docker version is usually 1 to 2 days behind

## Acknowledgements

### Donors

> See the English version.

### Contributors

[See the list of project contributors](https://github.com/storminstakk/Justice_Juggernaut//graphs/contributors)

## Open Source License

> Oppose 996, starting from me.

[Anti 996 License](https://github.com/kattgu7/Anti-996-License/blob/master/LICENSE_CN_EN)