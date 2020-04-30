/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/tableResourcesMappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";

/** Class representing a TableResources. */
export class TableResources {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Create a TableResources.
   * @param {CosmosDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the Tables under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TableResourcesListTablesResponse>
   */
  listTables(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.TableResourcesListTablesResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param callback The callback
   */
  listTables(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.TableListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listTables(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TableListResult>): void;
  listTables(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TableListResult>, callback?: msRest.ServiceCallback<Models.TableListResult>): Promise<Models.TableResourcesListTablesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listTablesOperationSpec,
      callback) as Promise<Models.TableResourcesListTablesResponse>;
  }

  /**
   * Gets the Tables under an existing Azure Cosmos DB database account with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TableResourcesGetTableResponse>
   */
  getTable(resourceGroupName: string, accountName: string, tableName: string, options?: msRest.RequestOptionsBase): Promise<Models.TableResourcesGetTableResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param callback The callback
   */
  getTable(resourceGroupName: string, accountName: string, tableName: string, callback: msRest.ServiceCallback<Models.TableGetResults>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getTable(resourceGroupName: string, accountName: string, tableName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TableGetResults>): void;
  getTable(resourceGroupName: string, accountName: string, tableName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TableGetResults>, callback?: msRest.ServiceCallback<Models.TableGetResults>): Promise<Models.TableResourcesGetTableResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        tableName,
        options
      },
      getTableOperationSpec,
      callback) as Promise<Models.TableResourcesGetTableResponse>;
  }

  /**
   * Create or update an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateTableParameters The parameters to provide for the current Table.
   * @param [options] The optional parameters
   * @returns Promise<Models.TableResourcesCreateUpdateTableResponse>
   */
  createUpdateTable(resourceGroupName: string, accountName: string, tableName: string, createUpdateTableParameters: Models.TableCreateUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.TableResourcesCreateUpdateTableResponse> {
    return this.beginCreateUpdateTable(resourceGroupName,accountName,tableName,createUpdateTableParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.TableResourcesCreateUpdateTableResponse>;
  }

  /**
   * Deletes an existing Azure Cosmos DB Table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteTable(resourceGroupName: string, accountName: string, tableName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteTable(resourceGroupName,accountName,tableName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the
   * provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TableResourcesGetTableThroughputResponse>
   */
  getTableThroughput(resourceGroupName: string, accountName: string, tableName: string, options?: msRest.RequestOptionsBase): Promise<Models.TableResourcesGetTableThroughputResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param callback The callback
   */
  getTableThroughput(resourceGroupName: string, accountName: string, tableName: string, callback: msRest.ServiceCallback<Models.ThroughputSettingsGetResults>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getTableThroughput(resourceGroupName: string, accountName: string, tableName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ThroughputSettingsGetResults>): void;
  getTableThroughput(resourceGroupName: string, accountName: string, tableName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ThroughputSettingsGetResults>, callback?: msRest.ServiceCallback<Models.ThroughputSettingsGetResults>): Promise<Models.TableResourcesGetTableThroughputResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        tableName,
        options
      },
      getTableThroughputOperationSpec,
      callback) as Promise<Models.TableResourcesGetTableThroughputResponse>;
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The parameters to provide for the RUs per second of the
   * current Table.
   * @param [options] The optional parameters
   * @returns Promise<Models.TableResourcesUpdateTableThroughputResponse>
   */
  updateTableThroughput(resourceGroupName: string, accountName: string, tableName: string, updateThroughputParameters: Models.ThroughputSettingsUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.TableResourcesUpdateTableThroughputResponse> {
    return this.beginUpdateTableThroughput(resourceGroupName,accountName,tableName,updateThroughputParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.TableResourcesUpdateTableThroughputResponse>;
  }

  /**
   * Create or update an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateTableParameters The parameters to provide for the current Table.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateUpdateTable(resourceGroupName: string, accountName: string, tableName: string, createUpdateTableParameters: Models.TableCreateUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        tableName,
        createUpdateTableParameters,
        options
      },
      beginCreateUpdateTableOperationSpec,
      options);
  }

  /**
   * Deletes an existing Azure Cosmos DB Table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteTable(resourceGroupName: string, accountName: string, tableName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        tableName,
        options
      },
      beginDeleteTableOperationSpec,
      options);
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The parameters to provide for the RUs per second of the
   * current Table.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateTableThroughput(resourceGroupName: string, accountName: string, tableName: string, updateThroughputParameters: Models.ThroughputSettingsUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        tableName,
        updateThroughputParameters,
        options
      },
      beginUpdateTableThroughputOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listTablesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TableListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getTableOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TableGetResults
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getTableThroughputOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateUpdateTableOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "createUpdateTableParameters",
    mapper: {
      ...Mappers.TableCreateUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TableGetResults
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteTableOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateTableThroughputOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "updateThroughputParameters",
    mapper: {
      ...Mappers.ThroughputSettingsUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
