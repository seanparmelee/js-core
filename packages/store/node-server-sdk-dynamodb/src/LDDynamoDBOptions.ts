import { LDLogger } from '@launchdarkly/node-server-sdk';
import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';

/**
 * Options for configuring {@link DynamoDBFeatureStoreFactory} or {@link DynamoDBBigSegmentStoreFactory}.
 */
export default interface LDDynamoDBOptions {
  /**
   * Options to be passed to the DynamoDB client constructor, as defined by the AWS SDK.
   */
  clientOptions?: DynamoDBClientConfig;

  /**
   * Specifies an existing, already-configured DynamoDB client instance that the feature store
   * should use rather than creating one of its own. If you specify an existing client, then the
   * clientOptions property is ignored.
   */
  dynamoDBClient?: DynamoDBClient;

  /**
   * An optional namespace prefix for all keys stored in DynamoDB. Use this if you are sharing
   * the same database table between multiple clients that are for different LaunchDarkly
   * environments, to avoid key collisions.
   */
  prefix?: string;

  /**
   * The amount of time, in seconds, that recently read or updated items should remain in an
   * in-memory cache. If it is zero, there will be no in-memory caching.
   *
   * This parameter applies only to {@link DynamoDBFeatureStore}. It is ignored for {@link DynamoDBBigSegmentStore}.
   * Caching for {@link DynamoDBBigSegmentStore} is configured separately, in the SDK's
   * `LDBigSegmentsOptions` type, since it is independent of what database implementation is used.
   *
   * If omitted, the default value is 15 seconds.
   */
  cacheTTL?: number;

  /**
   * A logger to be used for warnings and errors generated by the feature store. If not specified,
   * it will use the SDK's logging configuration.
   */
  logger?: LDLogger;
}
