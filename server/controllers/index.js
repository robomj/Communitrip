module.exports = {
    auth: require('./users/auth'),
    signup: require('./users/signup'),
    signout: require('./users/signout'),
    logout: require('./users/logout'),
    login: require('./users/login'),
    editprofile: require('./users/editprofile'),
    getusers: require('./users/getusers'),
    createpost: require('./posts/createpost'),
    deletepost: require('./posts/deletepost'),
    getonepost: require('./posts/getonepost'),
    getallposts: require('./posts/getallposts'),
    mypost: require('./posts/mypost'),
    patchpost: require('./posts/patchpost'),
    tagpost: require('./posts/tagpost')
}