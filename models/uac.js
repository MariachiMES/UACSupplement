const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UAC extends Model {}

UAC.init(
  {
    uac_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uacname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [9],
      },
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    coo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    intake: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    case_manager: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sponsor_gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sponsor_assessment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    frp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ari: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    por: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sponsor_bgc: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sponsor_id: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sponsor_fp: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    hhm_id: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    hhm_checks: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sex_offender_check: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    relationship_narrative: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    release_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sir: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sponsor_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sponsor_dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sponsor_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sponsor_address_1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sponsor_address_2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sponsor_city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sponsor_state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sponsor_zip: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sponsor_relationship: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    list_of_bcs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coo_narrative: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    self_disclosure: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    criminal_history: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sponsor_id_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hhm_id_list: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fp_required: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fp_results: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    can_check_required: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "CA/N Check not required",
    },
    can_check_received: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    can_check_results: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coo_caregiver: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    prior_sponsorship: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    previous_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    release_recommendation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    home_study_prs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coo_caregiver_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    prior_sponsorship_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    previous_address_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    criminal_history_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    can_check_requested_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "UAC",
  }
);

module.exports = UAC;
