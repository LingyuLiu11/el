/**
 * @generated SignedSource<<f58e1d9ca5e4d8085a4de9e0ee35015f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type UserLoggedRendererQuery$variables = {||};
export type UserLoggedRendererQuery$data = {|
  +viewer: {|
    +user: {|
      +id: string,
      +createdAt: any,
      +updatedAt: any,
      +username: ?string,
    |},
    +sessionToken: string,
  |},
|};
export type UserLoggedRendererQuery = {|
  variables: UserLoggedRendererQuery$variables,
  response: UserLoggedRendererQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Viewer",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "sessionToken",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserLoggedRendererQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserLoggedRendererQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5c1e9eb40013895cce1f4617686df062",
    "id": null,
    "metadata": {},
    "name": "UserLoggedRendererQuery",
    "operationKind": "query",
    "text": "query UserLoggedRendererQuery {\n  viewer {\n    user {\n      id\n      createdAt\n      updatedAt\n      username\n    }\n    sessionToken\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "7219977dbe4d3946171f8653f114555d";

module.exports = ((node/*: any*/)/*: Query<
  UserLoggedRendererQuery$variables,
  UserLoggedRendererQuery$data,
>*/);
