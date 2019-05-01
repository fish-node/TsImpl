// 最小权限原则：
//   能用readonly就用readonly

// AJAX请求的返回值类型通常是固定的
//   可以提前定义格式方便类型检查
interface UserInterface {
  readonly login: string;
  readonly id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}


// 这种定义好的接口，用起来。。。太舒服了
//   代码智能提醒，定义一次就够，以后基本不同看文档了
function logUserInfo(info: UserInterface): void{
    console.log(info.avatar_url);
    console.log(info.gists_url);

    // .login 是只读的，下面不合法
    // info.login = 'hhh'
}

// 符合接口规则的对象
let info =  {
    "login": "octocat",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "gravatar_id": "",
    "url": "https://api.github.com/users/octocat",
    "html_url": "https://github.com/octocat",
    "followers_url": "https://api.github.com/users/octocat/followers",
    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    "organizations_url": "https://api.github.com/users/octocat/orgs",
    "repos_url": "https://api.github.com/users/octocat/repos",
    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
    "received_events_url": "https://api.github.com/users/octocat/received_events",
    "type": "User",
    "site_admin": false
}
logUserInfo(info)

// 下面的报错，接口不匹配
// logInfo({key: "value"})

