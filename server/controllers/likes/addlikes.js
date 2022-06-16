const { posts, likes } = require('../../models')

module.exports = (req, res) => {
    likes.findOne({
        attributes: {
            exclude: ['postId', 'userId']
        },
        where: {
            user_id: req.body.user_id
        }
    }).then((result) => {
        if (!result) {
            res.status(400).json({ message: '로그인 먼저 하세요' })
        } else {
            posts.findOne({
                attributes: {
                    exclude: ['userId']
                },
                where: {
                    id: req.body.post_id
                }
            }).then((result) => {
                posts.update({
                    total_likes: result.dataValues.total_likes + 1
                }, {
                    where: {
                        id: req.body.post_id
                    }
                }).then(() => {
                    res.json({ message: '좋아요 개수 증가' })
                })
            }).catch((err) => {
                console.log(err)
                res.status(500).json({ message: '서버에 문제가 있네요' })
            })
        }
    })
}