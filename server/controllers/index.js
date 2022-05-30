module.exports = {
    signup: require('./users/signup'),
    signout: require('./users/signout'),
    logout: require('./users/logout'),
    login: require('./users/login'),
    editprofile: require('./users/editprofile'),
    getusers: require('./users/getusers'),
    createpost: require('./users/createpost'),
    deletepost: require('./users/deletepost'),
    getonepost: require('./users/getonepost'),
    getposts: require('./users/getposts'),
    mypost: require('./users/mypost'),
    patchpost: require('./users/patchpost'),
    tagpost: require('./users/tagpost')
}