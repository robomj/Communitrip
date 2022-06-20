const { likes } = require('../../models')

module.exports = (req, res) => {
    likes.findOne({
        attributes: {
            exclude: ['userId', 'postId']
        },
        where: {
            id: req.params.postId
        }
    }).then((result) => {
        if (!result) {
            res.status(400).json({ message: '로그인 먼저 하세요' })
        } else {
            res.json({ data : result.dataValues.user_id })
        }
    }).catch((err) => {
        console.log(err)
        res.status(500).json({ message: '서버에 문제가 있네요' })
    })
}