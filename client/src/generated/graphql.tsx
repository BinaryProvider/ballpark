import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Estimation = {
  __typename?: 'Estimation';
  id: Scalars['ID'];
  story: Story;
  point: Scalars['Float'];
  user: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createStory?: Maybe<Story>;
  estimate?: Maybe<Estimation>;
};

export type MutationCreateStoryArgs = {
  description: Scalars['String'];
  creator: Scalars['String'];
};

export type MutationEstimateArgs = {
  story: Scalars['ID'];
  user: Scalars['String'];
  point: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  stories?: Maybe<Array<Story>>;
  story?: Maybe<Story>;
  estimations?: Maybe<Array<Estimation>>;
  estimation?: Maybe<Estimation>;
};

export type QueryStoryArgs = {
  id: Scalars['ID'];
};

export type QueryEstimationArgs = {
  story: Scalars['ID'];
  user: Scalars['String'];
};

export type Story = {
  __typename?: 'Story';
  id: Scalars['ID'];
  description: Scalars['String'];
  creator: Scalars['String'];
  estimations?: Maybe<Array<Estimation>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  storyCreated: Story;
  estimationDone: Story;
};

export type SubscriptionEstimationDoneArgs = {
  story: Scalars['ID'];
};

export type CreateStoryMutationVariables = {
  description: Scalars['String'];
  creator: Scalars['String'];
};

export type CreateStoryMutation = { __typename?: 'Mutation' } & {
  createStory: Maybe<
    { __typename?: 'Story' } & Pick<Story, 'id' | 'description' | 'creator'>
  >;
};

export type EstimateMutationVariables = {
  story: Scalars['ID'];
  user: Scalars['String'];
  point: Scalars['Float'];
};

export type EstimateMutation = { __typename?: 'Mutation' } & {
  estimate: Maybe<
    { __typename?: 'Estimation' } & Pick<Estimation, 'user' | 'point'>
  >;
};

export type GetStoryQueryVariables = {
  id: Scalars['ID'];
};

export type GetStoryQuery = { __typename?: 'Query' } & {
  story: Maybe<
    { __typename?: 'Story' } & Pick<Story, 'id' | 'description' | 'creator'> & {
        estimations: Maybe<
          Array<
            { __typename?: 'Estimation' } & Pick<Estimation, 'point' | 'user'>
          >
        >;
      }
  >;
};

export type GetEstimationsSubscriptionVariables = {
  story: Scalars['ID'];
};

export type GetEstimationsSubscription = { __typename?: 'Subscription' } & {
  estimationDone: { __typename?: 'Story' } & {
    estimations: Maybe<
      Array<{ __typename?: 'Estimation' } & Pick<Estimation, 'point' | 'user'>>
    >;
  };
};

export const CreateStoryDocument = gql`
  mutation createStory($description: String!, $creator: String!) {
    createStory(description: $description, creator: $creator) {
      id
      description
      creator
    }
  }
`;
export type CreateStoryMutationFn = ApolloReactCommon.MutationFunction<
  CreateStoryMutation,
  CreateStoryMutationVariables
>;
export type CreateStoryComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateStoryMutation,
    CreateStoryMutationVariables
  >,
  'mutation'
>;

export const CreateStoryComponent = (props: CreateStoryComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreateStoryMutation,
    CreateStoryMutationVariables
  >
    mutation={CreateStoryDocument}
    {...props}
  />
);

export type CreateStoryProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  CreateStoryMutation,
  CreateStoryMutationVariables
> &
  TChildProps;
export function withCreateStory<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateStoryMutation,
    CreateStoryMutationVariables,
    CreateStoryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateStoryMutation,
    CreateStoryMutationVariables,
    CreateStoryProps<TChildProps>
  >(CreateStoryDocument, {
    alias: 'withCreateStory',
    ...operationOptions
  });
}

export function useCreateStoryMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateStoryMutation,
    CreateStoryMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateStoryMutation,
    CreateStoryMutationVariables
  >(CreateStoryDocument, baseOptions);
}
export type CreateStoryMutationHookResult = ReturnType<
  typeof useCreateStoryMutation
>;
export type CreateStoryMutationResult = ApolloReactCommon.MutationResult<
  CreateStoryMutation
>;
export type CreateStoryMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateStoryMutation,
  CreateStoryMutationVariables
>;
export const EstimateDocument = gql`
  mutation estimate($story: ID!, $user: String!, $point: Float!) {
    estimate(story: $story, user: $user, point: $point) {
      user
      point
    }
  }
`;
export type EstimateMutationFn = ApolloReactCommon.MutationFunction<
  EstimateMutation,
  EstimateMutationVariables
>;
export type EstimateComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    EstimateMutation,
    EstimateMutationVariables
  >,
  'mutation'
>;

export const EstimateComponent = (props: EstimateComponentProps) => (
  <ApolloReactComponents.Mutation<EstimateMutation, EstimateMutationVariables>
    mutation={EstimateDocument}
    {...props}
  />
);

export type EstimateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  EstimateMutation,
  EstimateMutationVariables
> &
  TChildProps;
export function withEstimate<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    EstimateMutation,
    EstimateMutationVariables,
    EstimateProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    EstimateMutation,
    EstimateMutationVariables,
    EstimateProps<TChildProps>
  >(EstimateDocument, {
    alias: 'withEstimate',
    ...operationOptions
  });
}

export function useEstimateMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    EstimateMutation,
    EstimateMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    EstimateMutation,
    EstimateMutationVariables
  >(EstimateDocument, baseOptions);
}
export type EstimateMutationHookResult = ReturnType<typeof useEstimateMutation>;
export type EstimateMutationResult = ApolloReactCommon.MutationResult<
  EstimateMutation
>;
export type EstimateMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EstimateMutation,
  EstimateMutationVariables
>;
export const GetStoryDocument = gql`
  query getStory($id: ID!) {
    story(id: $id) {
      id
      description
      creator
      estimations {
        point
        user
      }
    }
  }
`;
export type GetStoryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetStoryQuery,
    GetStoryQueryVariables
  >,
  'query'
> &
  ({ variables: GetStoryQueryVariables; skip?: boolean } | { skip: boolean });

export const GetStoryComponent = (props: GetStoryComponentProps) => (
  <ApolloReactComponents.Query<GetStoryQuery, GetStoryQueryVariables>
    query={GetStoryDocument}
    {...props}
  />
);

export type GetStoryProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetStoryQuery,
  GetStoryQueryVariables
> &
  TChildProps;
export function withGetStory<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetStoryQuery,
    GetStoryQueryVariables,
    GetStoryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetStoryQuery,
    GetStoryQueryVariables,
    GetStoryProps<TChildProps>
  >(GetStoryDocument, {
    alias: 'withGetStory',
    ...operationOptions
  });
}

export function useGetStoryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetStoryQuery,
    GetStoryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetStoryQuery, GetStoryQueryVariables>(
    GetStoryDocument,
    baseOptions
  );
}
export type GetStoryQueryHookResult = ReturnType<typeof useGetStoryQuery>;
export type GetStoryQueryResult = ApolloReactCommon.QueryResult<
  GetStoryQuery,
  GetStoryQueryVariables
>;
export const GetEstimationsDocument = gql`
  subscription getEstimations($story: ID!) {
    estimationDone(story: $story) {
      estimations {
        point
        user
      }
    }
  }
`;
export type GetEstimationsComponentProps = Omit<
  ApolloReactComponents.SubscriptionComponentOptions<
    GetEstimationsSubscription,
    GetEstimationsSubscriptionVariables
  >,
  'subscription'
>;

export const GetEstimationsComponent = (
  props: GetEstimationsComponentProps
) => (
  <ApolloReactComponents.Subscription<
    GetEstimationsSubscription,
    GetEstimationsSubscriptionVariables
  >
    subscription={GetEstimationsDocument}
    {...props}
  />
);

export type GetEstimationsProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetEstimationsSubscription,
  GetEstimationsSubscriptionVariables
> &
  TChildProps;
export function withGetEstimations<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetEstimationsSubscription,
    GetEstimationsSubscriptionVariables,
    GetEstimationsProps<TChildProps>
  >
) {
  return ApolloReactHoc.withSubscription<
    TProps,
    GetEstimationsSubscription,
    GetEstimationsSubscriptionVariables,
    GetEstimationsProps<TChildProps>
  >(GetEstimationsDocument, {
    alias: 'withGetEstimations',
    ...operationOptions
  });
}

export function useGetEstimationsSubscription(
  baseOptions?: ApolloReactHooks.SubscriptionHookOptions<
    GetEstimationsSubscription,
    GetEstimationsSubscriptionVariables
  >
) {
  return ApolloReactHooks.useSubscription<
    GetEstimationsSubscription,
    GetEstimationsSubscriptionVariables
  >(GetEstimationsDocument, baseOptions);
}
export type GetEstimationsSubscriptionHookResult = ReturnType<
  typeof useGetEstimationsSubscription
>;
export type GetEstimationsSubscriptionResult = ApolloReactCommon.SubscriptionResult<
  GetEstimationsSubscription
>;
