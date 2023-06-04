import { get, post } from "@/tool/http";
import qs from "qs";

const login = function (
  account: string,
  password: string,
  success: Function,
  fail: Function
) {
  axios({
    method: "post",
    url: "/user/login",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.parse({
      account,
      password,
    }),
  })
    .then(function () {
      success();
    })
    .catch(function () {
      fail();
    });
};

const get_version = function (callback: Function) {
  get("/system/version", callback);
};

const stop_all = function (callback: Function) {
  get("/user/stop", callback);
};

const start_all = function (callback: Function) {
  get("/user/start", callback);
};

const stop = function (source_id: number, callback: Function) {
  get("/user/stop/" + String(source_id), callback);
};

const start = function (source_id: number, callback: Function) {
  get("/user/start/" + String(source_id), callback);
};

const content_list = function (page: number, num: number, callback: Function) {
  post(
    "/user/list",
    {
      pg: page,
      num: num,
    },
    callback
  );
};

const search_content = function (
  keyword: string,
  page: number,
  num: number,
  callback: Function
) {
  post(
    "/user/search",
    {
      pg: page,
      num: num,
      keyword: keyword,
    },
    callback
  );
};

const del_content = function (content_id: number, callback: Function) {
  post(
    "/user/del",
    {
      id: content_id,
    },
    callback
  );
};

const count_content = function (callback: Function) {
  get("/user/count", callback);
};

// 获取采集源下的影片列表
const list_content_source = function (
  source_id: number,
  page: number,
  num: number,
  callback: Function
) {
  post(
    "/user/source/list",
    {
      id: source_id,
      pg: page,
      num: num,
    },
    callback
  );
};

const search_content_source = function (
  source_id: number,
  keyword: string,
  page: number,
  num: number,
  callback: Function
) {
  post(
    "/user/source/search",
    {
      id: source_id,
      keyword: keyword,
      pg: page,
      num: num,
    },
    callback
  );
};

const all_source = function (callback: Function) {
  get("/user/source/all", callback);
};

const add_source = function (name: string, url: string, callback: Function) {
  post(
    "/user/source/add",
    {
      name: name,
      url: url,
    },
    callback
  );
};

// 重新采集source
const reget_source = function (source_id: number, callback: Function) {
  post(
    "/user/source/reGet",
    {
      id: source_id,
    },
    callback
  );
};

// 删除source
const del_source = function (source_id: number, callback: Function) {
  post(
    "/user/source/del",
    {
      id: source_id,
    },
    callback
  );
};

// 获取某个源下的所有采集类
const all_class_source = function (source_id: number, callback: Function) {
  get("/user/source/all_class/" + String(source_id), callback);
};

// 获取自建分类的列表
const list_content_category = function (
  category_id: number,
  page: number,
  num: number,
  callback: Function
) {
  post(
    "/user/category/list",
    {
      id: category_id,
      pg: page,
      num: num,
    },
    callback
  );
};

const search_content_category = function (
  category_id: number,
  keyword: string,
  page: number,
  num: number,
  callback: Function
) {
  post(
    "/user/category/search",
    {
      id: category_id,
      keyword: keyword,
      pg: page,
      num: num,
    },
    callback
  );
};

const all_category = function (callback: Function) {
  get("/user/category/call", callback);
};

// 添加自建分类
const add_category = function (name: string, callback: Function) {
  post(
    "/user/category/add",
    {
      name: name,
    },
    callback
  );
};

// 删除自建分类
const del_category = function (category_id: number, callback: Function) {
  post(
    "/user/category/del",
    {
      id: category_id,
    },
    callback
  );
};

const list_content_class = function (
  class_id: number,
  page: number,
  num: number,
  callback: Function
) {
  post(
    "/user/class/list",
    {
      id: class_id,
      pg: page,
      num: num,
    },
    callback
  );
};

const search_content_class = function (
  class_id: number,
  keyword: string,
  page: number,
  num: number,
  callback: Function
) {
  post(
    "/user/class/search",
    {
      id: class_id,
      keyword: keyword,
      pg: page,
      num: num,
    },
    callback
  );
};

// 修改采集类的状态，是否采集
const change_get_class = function (
  class_id: number,
  get: boolean,
  callback: Function
) {
  post(
    "/user/class/changeGet",
    {
      id: class_id,
      get: get,
    },
    callback
  );
};

const distribute_class_category = function (
  class_id: number,
  category_id: number,
  callback: Function
) {
  post(
    "/user/distribute",
    {
      classId: class_id,
      categoryId: category_id,
    },
    callback
  );
};

const update_account = function (new_account: string, callback: Function) {
  post(
    "/user/updateAccount",
    {
      account: new_account,
    },
    callback
  );
};

const update_password = function (new_password: string, callback: Function) {
  post(
    "/user/updatePassword",
    {
      password: new_password,
    },
    callback
  );
};

const get_collect_interval = function (callback: Function) {
  get("/user/getCollectInterval", callback);
};

const update_collect_interval = function (
  interval: number,
  callback: Function
) {
  post(
    "/user/updateCollectInterval",
    {
      interval: interval,
    },
    callback
  );
};

const set_category_main = function (category_id: number, callback: Function) {
  post(
    "/user/setCategoryMain",
    {
      id: category_id,
    },
    callback
  );
};

const purge_cache = function (callback: Function) {
  get("/user/cachePurge", callback);
};

const log_out = function (callback: Function) {
  get("/user/logout", callback);
};

// 导出api函数
export {
  login,
  get_version,
  stop_all,
  start_all,
  stop,
  start,
  content_list,
  search_content,
  count_content,
  del_content,
  list_content_source,
  search_content_source,
  all_source,
  add_source,
  reget_source,
  del_source,
  all_class_source,
  list_content_category,
  search_content_category,
  all_category,
  add_category,
  del_category,
  list_content_class,
  search_content_class,
  change_get_class,
  distribute_class_category,
  update_account,
  update_password,
  get_collect_interval,
  update_collect_interval,
  set_category_main,
  purge_cache,
  log_out,
};
