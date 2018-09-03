function friendlyDate(date) {
  let dateObj = (typeof date === 'object') ? date : new Date(date)
  let space = Date.now() - dateObj.getTime()
  let string = ''

  switch (true) {
    case space < 60000:
      string = '刚刚'
      break
    case space < 1000*3600:
      string = Math.floor(space/60000) + '分钟前'
      break
    case space < 1000*3600*24:
      string = Math.floor(space/(1000*3600)) + '小时前'
      break
    default:
      string = Math.floor(space/(1000*3600*24)) + '天前'
  }

  return string

}

export default {
  install(Vue,opitons) {
    Vue.prototype.friendlyDate = friendlyDate
  }
}
