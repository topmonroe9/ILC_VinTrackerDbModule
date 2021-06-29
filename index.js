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
            }
        }, {
            freezeTableName: true
        });

    this.AutoriaCarCheckList = tracking_carriers.define('autoria_car_cloning_checklist', {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            }

    }, {
            freezeTableName: true
        });

    this.AutoRiaSellerCheckList = tracking_carriers.define('autoria_seller_cloning_checklist', {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            }

    }, {
            freezeTableName: true
        });

    this.AutoRiaSellerHistoryCheckList = tracking_carriers.define('autoria_seller_history_cloning_checklist', {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            }

    }, {
            freezeTableName: true
        });

}

module.exports = TrackingCarriers
