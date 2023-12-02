import localeMessageBox from '@renderer/components/message-box/locale/zh-CN';
import localeLogin from '@renderer/views/login/locale/zh-CN';

import localeWorkplace from '@renderer/views/dashboard/workplace/locale/zh-CN';

import localeMonitor from '@renderer/views/dashboard/monitor/locale/zh-CN';

import localeSearchTable from '@renderer/views/list/search-table/locale/zh-CN';
import localeCardList from '@renderer/views/list/card/locale/zh-CN';

import localeStepForm from '@renderer/views/form/step/locale/zh-CN';
import localeGroupForm from '@renderer/views/form/group/locale/zh-CN';

import localeBasicProfile from '@renderer/views/profile/basic/locale/zh-CN';

import localeDataAnalysis from '@renderer/views/visualization/data-analysis/locale/zh-CN';
import localeMultiDAnalysis from '@renderer/views/visualization/multi-dimension-data-analysis/locale/zh-CN';

import localeSuccess from '@renderer/views/result/success/locale/zh-CN';
import localeError from '@renderer/views/result/error/locale/zh-CN';

import locale403 from '@renderer/views/exception/403/locale/zh-CN';
import locale404 from '@renderer/views/exception/404/locale/zh-CN';
import locale500 from '@renderer/views/exception/500/locale/zh-CN';

import localeUserInfo from '@renderer/views/user/info/locale/zh-CN';
import localeUserSetting from '@renderer/views/user/setting/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,

  ...localeMonitor,
  ...localeSearchTable,
  ...localeCardList,
  ...localeStepForm,
  ...localeGroupForm,
  ...localeBasicProfile,
  ...localeDataAnalysis,
  ...localeMultiDAnalysis,
  ...localeSuccess,
  ...localeError,
  ...locale403,
  ...locale404,
  ...locale500,
  ...localeUserInfo,
  ...localeUserSetting,
};
