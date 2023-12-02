import localeMessageBox from '@renderer/components/message-box/locale/en-US';
import localeLogin from '@renderer/views/login/locale/en-US';

import localeWorkplace from '@renderer/views/dashboard/workplace/locale/en-US';

import localeMonitor from '@renderer/views/dashboard/monitor/locale/en-US';

import localeSearchTable from '@renderer/views/list/search-table/locale/en-US';
import localeCardList from '@renderer/views/list/card/locale/en-US';

import localeStepForm from '@renderer/views/form/step/locale/en-US';
import localeGroupForm from '@renderer/views/form/group/locale/en-US';

import localeBasicProfile from '@renderer/views/profile/basic/locale/en-US';

import localeDataAnalysis from '@renderer/views/visualization/data-analysis/locale/en-US';
import localeMultiDAnalysis from '@renderer/views/visualization/multi-dimension-data-analysis/locale/en-US';

import localeSuccess from '@renderer/views/result/success/locale/en-US';
import localeError from '@renderer/views/result/error/locale/en-US';

import locale403 from '@renderer/views/exception/403/locale/en-US';
import locale404 from '@renderer/views/exception/404/locale/en-US';
import locale500 from '@renderer/views/exception/500/locale/en-US';

import localeUserInfo from '@renderer/views/user/info/locale/en-US';
import localeUserSetting from '@renderer/views/user/setting/locale/en-US';

import localeSettings from './en-US/settings';

export default {
  'menu.dashboard': 'Dashboard',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': 'FAQ',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
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
