module.exports = {
    get: (req,res) => {
        res.render("index", { layout: 'layouts/main', title: 'Flurry.js' })
    }
}