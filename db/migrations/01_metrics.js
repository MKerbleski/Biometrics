// https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
// m / purpose' / coin_type' / account' / change / address_index
// purpose is 42 because it does not follow the bip 44 specifications 
// coin_type is domain heatlh | personal | cache 
// account is catagory | medications | vitals | diagonosis 
// change is sub-catagory HR | OxSat | Weight 
// index is sequential and 

exports.up = function(knex, Promise) {
  return knex.schema.createTable('metrics', function(tbl){
    tbl.increments()
    tbl.integer('first')
    tbl.integer('second')
    tbl.integer('thrid')
    tbl.integer('forth')
    tbl.integer('fifth')
    tbl.integer('name')
    tbl.timestamp('created_at').defaultTo(knex.fn.now())
    tbl.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('metrics')
};
  