/**
 * @generated SignedSource<<c422caf45b208af02d237a47966aed7e>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type LogInInput = {|
  username: string,
  password: string,
  clientMutationId?: ?string,
|};
export type LogInMutation$variables = {|
  input: LogInInput,
|};
export type LogInMutation$data = {|
  +logIn: ?{|
    +viewer: {|
      +user: {|
        +id: string,
        +createdAt: any,
        +updatedAt: any,
        +username: ?string,
      |},
      +sessionToken: string,
    |},
  |},
|};
export type LogInMutation = {|
  variables: LogInMutation$variables,
  response: LogInMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "LogInPayload",
    "kind": "LinkedField",
    "name": "logIn",
    "plural": false,
    "selections": [
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LogInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LogInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b226e92f1cb36a52a8a23cd3985ea971",
    "id": null,
    "metadata": {},
    "name": "LogInMutation",
    "operationKind": "mutation",
    "text": "mutation LogInMutation(\n  $input: LogInInput!\n) {\n  logIn(input: $input) {\n    viewer {\n      user {\n        id\n        createdAt\n        updatedAt\n        username\n      }\n      sessionToken\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "002663537815693116d46ba9618b8e49";

module.exports = ((node/*: any*/)/*: Mutation<
  LogInMutation$variables,
  LogInMutation$data,
>*/);
