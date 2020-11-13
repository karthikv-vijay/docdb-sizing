var data = [];
data.push("Namespace|Document Count|Average Document Size|Total Indexes|Index Size");
db.getMongo().getDBs().databases.forEach(function(databaseMeta){
	if (databaseMeta.name == 'admin' || databaseMeta.name == 'local' || databaseMeta.name == 'config') {
	    return;
	  }
	  var database = db.getSiblingDB(databaseMeta.name);
	  var stats = [];	
	  database.getCollectionInfos().forEach(function(collectionInfo){
	    var collection = database.getCollection(collectionInfo.name);
		var stat = collection.stats();
		stats.push(stat);
		});
		stats.map(function(stat){
		var line = `${stat.ns}|${stat.count}|${stat.avgObjSize}|${stat.nindexes}|${stat.totalIndexSize}`;
		data.push(line);
		})
	});
print(data.join("\n"));
