const {Sequelize, DataTypes} = require('sequelize');


function TrackingCarriers(dbURI) {
    const tracking_carriers = new Sequelize(dbURI)
    this.tracking_carriers = tracking_carriers

    this.DealsDataCheckList = tracking_carriers.define('ilcadmin_b24_deals_data_checklist', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
        }
    }, {
        freezeTableName: true
    })
    this.DBParserMatch = tracking_carriers.define('dbparser_auctions_match', {
        vin: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        lot_number: {
            type: DataTypes.INTEGER,
        },
        purchase_price: {
            type: DataTypes.BIGINT,
        },
        buyer_country: {
            type: DataTypes.STRING,
        },
        buyer_id: {
            type: DataTypes.STRING,
        },
        auction: {
            type: DataTypes.STRING,
        },
        sale_date: {
            type: DataTypes.BIGINT,
        },
        dbparser_id: {
            type: DataTypes.BIGINT,
        }
    }, {
        freezeTableName: true
    })

    this.DBparserCheckList = tracking_carriers.define('dbparser_auctions_all_lots_checklist', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
        }
    }, {
        freezeTableName: true
    });

    this.VinsList = tracking_carriers.define('vins_list', {
        vin: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        atlantis_checked: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        baltic_checked: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        columbauto_checked: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        liontrans_checked: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        lubeauto_checked: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        vsbros_checked: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        w8_checked: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        userSiteId: {
            type: DataTypes.BIGINT,
        },
        autoria_car_id: {
            type: DataTypes.BIGINT,

        }
    }, {
        freezeTableName: true
    });

    this.VinsData = tracking_carriers.define('vins_data', {
        // Model attributes are defined here
        vin: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        atlantis: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        baltic: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        columbauto: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        liontrans: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        lubeauto: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        vsbros: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        w8: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
        ilc: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        carrier: {
            type: DataTypes.STRING,
        },
        arrival_port: {
            type: DataTypes.STRING,
        },
        arrival_date: {
            type: DataTypes.DATE,
        },
        departure_date: {
            type: DataTypes.DATE,
        },
        userSiteId: {
            type: DataTypes.BIGINT,
        }
    }, {
        freezeTableName: true
    });

    this.AutoriaSeller = tracking_carriers.define( 'autoria_seller', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        siteId: {
               type: DataTypes.INTEGER,
        },
        siteName: {
               type: DataTypes.STRING,
        },
        city: {
               type: DataTypes.STRING,
        },
        countOfActiveAuto: {
               type: DataTypes.SMALLINT,
        },
        countOfSoldAuto: {
               type: DataTypes.SMALLINT,
        },
        email: {
               type: DataTypes.STRING,
        },
        phone: {
               type: DataTypes.STRING,
        },
        registeredDate: {
               type: DataTypes.DATE,
        },
        type: {
               type: DataTypes.STRING,
        }
    }, {
        freezeTableName: true
    })

    this.AutoRiaSellerHistory = tracking_carriers.define( 'autoria_seller_history', {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        countOfActiveAuto: {
               type: DataTypes.SMALLINT(5).UNSIGNED
        },
        countOfSoldAuto: {
               type: DataTypes.SMALLINT(5).UNSIGNED,
        },
        sellerId: {
               type: DataTypes.INTEGER,
        }
    }, {
        freezeTableName: true
    })


}

module.exports = TrackingCarriers
