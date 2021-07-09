const {Sequelize, DataTypes} = require('sequelize');

const vinsListSchema =              process.env.TRCKNCRRS_VINSLIST_TBLNAME || 'vins_list_id'
const vinsDataSchema =              process.env.TRCKNCRRS_VINSDATA_TBLNAME || 'vins_data_id'
const autoriaSeller =               process.env.TRCKNCRRS_AUTORIA_SELLER_TBLNAME || 'autoria_seller'
const autoriaSellerHistory =        process.env.TRCKNCRRS_AUTORIA_SELLER_HISTORY_TBLNAME || 'autoria_seller_history'
const dbparserChecklist =           process.env.TRCKNCRRS_DBPARSER_AUCTIONS_CHECKLIST_TBLNAME || 'dbparser_auctions_all_lots_checklist'
const dbparserMatch =               process.env.TRCKNCRRS_DBPARSER_AUCTIONS_MATCH_TBLNAME || 'dbparser_auctions_match'
const dealsDataCheckList =          process.env.TRCKNCRRS_ILCADMIN_B24_DEALS_DATA_CHECKLIST_TBLNAME || 'ilcadmin_b24_deals_data_checklist'


function TrackingCarriers(dbURI) {
    const tracking_carriers = new Sequelize(dbURI)
    this.tracking_carriers = tracking_carriers

    this.DealsDataCheckList = tracking_carriers.define(dealsDataCheckList, {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
        }
    }, {
        freezeTableName: true
    })
    this.DBParserMatch = tracking_carriers.define(dbparserMatch, {
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

    this.DBparserCheckList = tracking_carriers.define(dbparserChecklist, {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
        }
    }, {
        freezeTableName: true
    });

    this.VinsList = tracking_carriers.define(vinsListSchema, {
        id_vins_list: {
            type: DataTypes.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        },
        vin: {
            type: DataTypes.STRING(255),
            unique: 'idx_vin_userSiteId',
            allowNull: false,
        },
        atlantis_checked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        baltic_checked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        columbauto_checked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        liontrans_checked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        lubeauto_checked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        vsbros_checked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        w8_checked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        userSiteId: {
            type: DataTypes.BIGINT(20),
            defaultValue: null,
            unique: 'idx_vin_userSiteId'
        },
        autoria_car_id: {
            type: DataTypes.BIGINT(20),
            defaultValue: null
        }
    }, {
        freezeTableName: true
    });

    this.VinsData = tracking_carriers.define(vinsDataSchema, {
        // Model attributes are defined here
        id_vins_data: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        vin: {
            type: DataTypes.STRING(255),
            unique: 'idx_vin_userSiteId',
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
            type: DataTypes.BIGINT(20),
            defaultValue: null,
            unique: 'idx_vin_userSiteId'
        },
    }, {
        freezeTableName: true
    });

    this.AutoriaSeller = tracking_carriers.define(autoriaSeller, {
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

    this.AutoRiaSellerHistory = tracking_carriers.define(autoriaSellerHistory, {
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
