import ls from '@/utils/localStorage'

export const getToken = () => ls.get('token')

export const clearToken = () => ls.clear('token')
