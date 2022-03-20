/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../src/graphql/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Bookmark: { // root type
    description?: string | null; // String
    faviconUrl?: string | null; // String
    image?: string | null; // String
    title: string; // String!
    url: string; // String!
    uuid: string; // String!
  }
  Mutation: {};
  Query: {};
  Tag: { // root type
    background: string; // String!
    border: string; // String!
    color: string; // String!
    name: string; // String!
    uuid: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Bookmark: { // field return type
    description: string | null; // String
    faviconUrl: string | null; // String
    image: string | null; // String
    title: string; // String!
    url: string; // String!
    uuid: string; // String!
  }
  Mutation: { // field return type
    createTag: NexusGenRootTypes['Tag']; // Tag!
  }
  Query: { // field return type
    tag: NexusGenRootTypes['Tag'] | null; // Tag
    tags: NexusGenRootTypes['Tag'][]; // [Tag!]!
  }
  Tag: { // field return type
    background: string; // String!
    bookmarks: Array<NexusGenRootTypes['Bookmark'] | null> | null; // [Bookmark]
    border: string; // String!
    color: string; // String!
    name: string; // String!
    uuid: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Bookmark: { // field return type name
    description: 'String'
    faviconUrl: 'String'
    image: 'String'
    title: 'String'
    url: 'String'
    uuid: 'String'
  }
  Mutation: { // field return type name
    createTag: 'Tag'
  }
  Query: { // field return type name
    tag: 'Tag'
    tags: 'Tag'
  }
  Tag: { // field return type name
    background: 'String'
    bookmarks: 'Bookmark'
    border: 'String'
    color: 'String'
    name: 'String'
    uuid: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createTag: { // args
      background: string; // String!
      border: string; // String!
      color: string; // String!
      name: string; // String!
    }
  }
  Query: {
    tag: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}