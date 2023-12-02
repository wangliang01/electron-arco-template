import Mock from 'mockjs';

import './user';
import './message-box';

import '@renderer/views/dashboard/workplace/mock';

import '@renderer/views/dashboard/monitor/mock';

import '@renderer/views/list/card/mock';
import '@renderer/views/list/search-table/mock';

import '@renderer/views/form/step/mock';

import '@renderer/views/profile/basic/mock';

import '@renderer/views/visualization/data-analysis/mock';
import '@renderer/views/visualization/multi-dimension-data-analysis/mock';

import '@renderer/views/user/info/mock';
import '@renderer/views/user/setting/mock';

Mock.setup({
  timeout: '600-1000',
});
