const con = require('../combinedb');

function route(app) {

    app.get('/dynamicquerygrid', (req, res) => {

        try {
            const result = [];
            if (req.query.subquery) {
                const p = req.query.page || 1;
                var sql = req.query.subquery;
                // console.log(p);

                con.query(sql, (err, result) => {
                    if (err) throw err;
                    else {

                        const limit = 10;
                        const last = Math.ceil(result.length / limit);
                        const offset = (Number(p) - 1) * limit;
                        var limitsql = sql + ` limit ${limit} offset ${offset}`;
                        // console.log(limitsql);

                        const element = Object.keys(result[0]);
                        con.query(limitsql, (err, result) => {
                            if (err) throw err;
                            else {
                                res.render('dynamic-query-grid/dynamicgrid', { result, element, sql, p, last });
                            }
                        })

                    }
                })
            } else {
                res.render('dynamic-query-grid/dynamicgrid', { result });
            }
        }
        catch (err) {
            console.log(err);
        }
    })


}

module.exports = route;