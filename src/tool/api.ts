import { get, post, base_url, post_file,get_file } from '@/tool/http'
import qs from 'qs'

const login = (
    account: string,
    password: string,
    success: Function,
    fail: Function,
) => {
    axios({
        method: 'post',
        baseURL: base_url,
        url: '/user/login',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.parse({
            account,
            password,
        }),
    })
        .then(function () {
            success()
        })
        .catch(function () {
            fail()
        })
}

const silent_version = (success: Function, fail: Function) => {
    axios({
        method: 'get',
        baseURL: base_url,
        url: '/system/version',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
        .then(function () {
            success()
        })
        .catch(function () {
            fail()
        })
}

const get_version = function (callback: (status: number, data: any) => void) {
    get('/system/version', callback)
}

const stop_all = function (callback: (status: number, data: any) => void) {
    get('/user/stop', callback)
}

const start_all = function (callback: (status: number, data: any) => void) {
    get('/user/start', callback)
}

const stop = function (
    source_id: number,
    callback: (status: number, data: any) => void,
) {
    get('/user/stop/' + String(source_id), callback)
}

const start = function (
    source_id: number,
    callback: (status: number, data: any) => void,
) {
    get('/user/start/' + String(source_id), callback)
}

const content_list = function (
    page: number,
    num: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/list',
        {
            pg: page,
            num: num,
        },
        callback,
    )
}

const search_content = function (
    keyword: string,
    page: number,
    num: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/search',
        {
            pg: page,
            num: num,
            keyword: keyword,
        },
        callback,
    )
}

const rename_content = function (
    content_id: number,
    name: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/content/rename',
        {
            id: content_id,
            name: name,
        },
        callback,
    )
}

const repic_content = function (
    content_id: number,
    pic: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/content/repic',
        {
            id: content_id,
            pic: pic,
        },
        callback,
    )
}
const reactor_content = function (
    content_id: number,
    actor: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/content/reactor',
        {
            id: content_id,
            actor: actor,
        },
        callback,
    )
}
const redirector_content = function (
    content_id: number,
    director: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/content/redirector',
        {
            id: content_id,
            director: director,
        },
        callback,
    )
}
const reduration_content = function (
    content_id: number,
    duration: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/content/reduration',
        {
            id: content_id,
            duration: duration,
        },
        callback,
    )
}
const redesc_content = function (
    content_id: number,
    description: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/content/redesc',
        {
            id: content_id,
            description: description,
        },
        callback,
    )
}
const reurl_content = function (
    content_id: number,
    url: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/content/reurl',
        {
            id: content_id,
            url: url,
        },
        callback,
    )
}

const del_content = function (
    content_id: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/del',
        {
            id: content_id,
        },
        callback,
    )
}

const count_content = function (callback: (status: number, data: any) => void) {
    get('/user/count', callback)
}

// 获取采集源下的影片列表
const list_content_source = function (
    source_id: number,
    page: number,
    num: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/source/list',
        {
            id: source_id,
            pg: page,
            num: num,
        },
        callback,
    )
}

const search_content_source = function (
    source_id: number,
    keyword: string,
    page: number,
    num: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/source/search',
        {
            id: source_id,
            keyword: keyword,
            pg: page,
            num: num,
        },
        callback,
    )
}

const all_source = function (callback: (status: number, data: any) => void) {
    get('/user/source/all', callback)
}

// 添加source
const add_source = function (
    name: string,
    url: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/source/add',
        {
            name: name,
            url: url,
        },
        callback,
    )
}

// 重新采集source
const reget_source = function (
    source_id: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/source/reGet',
        {
            id: source_id,
        },
        callback,
    )
}

const rename_source = function (
    source_id: number,
    name: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/source/reName',
        {
            id: source_id,
            name: name,
        },
        callback,
    )
}

const reurl_source = function (
    source_id: number,
    url: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/source/reUrl',
        {
            id: source_id,
            url: url,
        },
        callback,
    )
}

// 删除source
const del_source = function (
    source_id: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/source/del',
        {
            id: source_id,
        },
        callback,
    )
}

// 获取某个源下的所有采集类
const all_class_source = function (
    source_id: number,
    callback: (status: number, data: any) => void,
) {
    get('/user/source/all_class/' + String(source_id), callback)
}

// 获取自建分类的列表
const list_content_category = function (
    category_id: number,
    page: number,
    num: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/category/list',
        {
            id: category_id,
            pg: page,
            num: num,
        },
        callback,
    )
}

const search_content_category = function (
    category_id: number,
    keyword: string,
    page: number,
    num: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/category/search',
        {
            id: category_id,
            keyword: keyword,
            pg: page,
            num: num,
        },
        callback,
    )
}

const all_category = function (callback: (status: number, data: any) => void) {
    get('/user/category/all', callback)
}

// 添加自建分类
const add_category = function (
    name: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/category/add',
        {
            name: name,
        },
        callback,
    )
}

// 添加自建分类
const rename_category = function (
    category_id: number,
    name: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/category/reName',
        {
            id: category_id,
            name: name,
        },
        callback,
    )
}

// 删除自建分类
const del_category = function (
    category_id: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/category/del',
        {
            id: category_id,
        },
        callback,
    )
}

const list_content_class = function (
    class_id: number,
    page: number,
    num: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/class/list',
        {
            id: class_id,
            pg: page,
            num: num,
        },
        callback,
    )
}

const search_content_class = function (
    class_id: number,
    keyword: string,
    page: number,
    num: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/class/search',
        {
            id: class_id,
            keyword: keyword,
            pg: page,
            num: num,
        },
        callback,
    )
}

// 修改采集类的状态，是否采集
const change_get_class = function (
    class_id: number,
    get: boolean,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/class/changeGet',
        {
            id: class_id,
            get: get ? '1' : '0',
        },
        callback,
    )
}

const distribute_class_category = function (
    class_id: number,
    category_id: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/class/distribute',
        {
            classId: class_id,
            categoryId: category_id,
        },
        callback,
    )
}

const update_account = function (
    new_account: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/updateAccount',
        {
            account: new_account,
        },
        callback,
    )
}

const update_password = function (
    new_password: string,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/updatePassword',
        {
            password: new_password,
        },
        callback,
    )
}

const get_collect_interval = function (
    callback: (status: number, data: any) => void,
) {
    get('/user/getCollectInterval', callback)
}

const update_collect_interval = function (
    interval: number,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/updateCollectInterval',
        {
            interval: interval,
        },
        callback,
    )
}

const set_category_main = function (
    category_id: number,
    main: boolean,
    callback: (status: number, data: any) => void,
) {
    post(
        '/user/setCategoryMain',
        {
            id: category_id,
            main: main ? 'true' : 'false',
        },
        callback,
    )
}

const purge_cache = function (callback: (status: number, data: any) => void) {
    get('/user/cachePurge', callback)
}

const log_out = function (callback: (status: number, data: any) => void) {
    get('/user/logout', callback)
}

const exports = function (callback: (status: number, data: any) => void) {
    get_file('/user/exports', callback)
}

const imports = function (
    db: FormData,
    callback: (status: number, data: any) => void,
) {
    post_file('/user/imports', db, callback)
}

// 导出api函数
export {
    login,
    silent_version,
    get_version,
    stop_all,
    start_all,
    stop,
    start,
    content_list,
    search_content,
    count_content,
    rename_content,
    repic_content,
    reactor_content,
    redirector_content,
    reduration_content,
    redesc_content,
    reurl_content,
    del_content,
    list_content_source,
    search_content_source,
    all_source,
    add_source,
    rename_source,
    reurl_source,
    reget_source,
    del_source,
    all_class_source,
    list_content_category,
    search_content_category,
    all_category,
    add_category,
    rename_category,
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
    exports,
    imports,
}
