import ls from '@/utils/localStorage'

export const getToken = () => ls.get('token')

export const removeToken = () => ls.remove('token')

export const clearLs = () => localStorage.clear()
