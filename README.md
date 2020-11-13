# Amazon DocumentDB (with MongoDb Compatibility) sizing calculator

The purpose of this tool is to help customers determine baseline sizing for their Amazon DocumentDB clusters. Please note that this sizing calculator provides you with baseline configuration to get started and customers should test their applications and make adjustments as required.This tool is not officially supported by AWS.

This tool is currently in BETA.

## Input
This tool takes a sizing questionnaire CSV file as first input parameter.Sizing Questionnaire represents data characteristics for your workload. A sample sizing questionnaire is provided in this repository and you can clone and update this file as appropriate for your workload. You can also send an optional second parameter to indicate backup retention period. The default value is 7 and maximum value is 35 days. 
## Output
This tool provides the pricing dimensions and their respective values for your workload as the output. You can use Amazon DocumentDB pricing calculator and leverage the output data from the sizing calculator to determine pricing estimate for your workload. This is only an estimate and actual cost could vary depending on your use case and access patterns. 
## Sample usage
    java -jar docdb-sizing.jar "Sizing_Questionnaire.csv" 10

## Sample Output 

![Alt text](assets/artifacts/Sample_Output.png?raw=true "Sample Output")

Link To Amazon DocumentDB Pricing Calculator -> https://aws.amazon.com/documentdb/pricing/#Pricing_example 
    
## Sizing Questionnaire
All fields in the sizing Questionnaire are mandatory and below is the description for each field.
* SLNo - Serial number to identify each row
* Database_Name - Name of the database in the cluster
* Collection_Name - Name of the collection within each database
* Document_Count - Number of documents in a given collection
* Average_Document_Size - Average size of a document in bytes in a collection
* Total_Indexes - Total number of indexes in bytes in a collection
* Index_Size - Total Index size in bytes in a given collection
* Working Set - Percentage of data that will be queried by the application at peak load
* Inserts_Per_Day - Total number of insert operations per day for a given collection
* Updates_Per_Day - Total number of update operations per day for a given collection
* Deletes_Per_Day - Total number of delete operations per day for a given collection
* Reads_Per_Day - Total number of read operations per day for a given collection
 
## Migration From MongoDB to Amazon DocumentDB
If you are migrating from MongoDB to Amazon DocumentDB, you can run the sizing.js script in the assets/artifacts/scripts directory in Mongo shell by using the following command 

    load(“sizing.js”)

This script leverages the stats command provided by the MongoDB driver and does NOT perform any write operations on your database nor reads data stored in any collections.

You can use the output from this script to update volume related information in the sizing questionnaire.
 