const {Sequelize, DataTypes} = require('sequelize');

const tracking_carriers = new Sequelize('mariadb://tracking_carriers:98tJg9t$@devsrv.ttline.online:3306/tracking_carriers') // Example for postgres


const VinsData = tracking_carriers.define('vins_data', {
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

const VinsList = tracking_carriers.define('vins_list', {
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

const DBparserCheckList = tracking_carriers.define('dbparser_auctions_all_lots_checklist', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
    }
}, {
    freezeTableName: true
});

const DBParserMatch = tracking_carriers.define('dbparser_auctions_match', {
    // id: {
    //     type: DataTypes.BIGINT,
    //     primaryKey: true,
    //     allowNull: false,
    //     autoIncrement: true,
    // },
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
    dbparser_id: {
        type: DataTypes.BIGINT,
    }
}, {
    freezeTableName: true
})

const DealsDataCheckList = tracking_carriers.define('ilcadmin_b24_deals_data_checklist', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
    }
}, {
    freezeTableName: true
});

module.exports = {
    VinsList,
    VinsData,
    DBparserCheckList,
    DBParserMatch,
    DealsDataCheckList,

    tracking_carriers
}
