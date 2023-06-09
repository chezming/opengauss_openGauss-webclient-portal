import { request } from '@/shared/axios';

/**
 * 获取应用Id
 * @returns
 */
export function queryAppId() {
  const url = '/api/playground/oauth2/callback/links';
  return request.get(url).then((res) => {
    return res.data;
  });
}

/**
 * 获取idtoken
 * @returns
 */
export function queryIdToken(params) {
  const url = `/api/playground/user/getIdToken`;
  return request.get(url, { params }).then((res) => {
    return res.data;
  });
}

/**
 * 获取用户信息
 * @param {*} params
 * @returns
 */
export function queryUserTokenInfo(params) {
  const url = '/api/playground/oauth2/callback';
  return request.get(url, { params }).then((res) => {
    return res.data;
  });
}

/**
 * 获取用户信息
 * @param {*} params
 * @returns
 */
export function queryUserInfo(params) {
  const url = '/api/playground/user/information';
  return request.get(url, { params }).then((res) => {
    return res.data;
  });
}

export function querySubdomain(params) {
  const url = '/api/playground/crd/resource';
  return request.post(url, params).then((res) => {
    return res.data;
  });
}
