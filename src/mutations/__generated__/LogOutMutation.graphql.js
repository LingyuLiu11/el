/**
 * @generated SignedSource<<62f2312a1a3b5ae96c9b177413fcf32b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type LogOutInput = {|
  clientMutationId?: ?string,
|};
export type LogOutMutation$variables = {|
  input: LogOutInput,
|};
export type LogOutMutation$data = {|
  +logOut: ?{|
    +clientMutationId: ?string,
  |},
|};
export type LogOutMutation = {|
  variables: LogOutMutation$variables,
  response: LogOutMutation$data,
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
    "concreteType": "LogOutPayload",
    "kind": "LinkedField",
    "name": "logOut",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
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
    "name": "LogOutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LogOutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c969fd42356b41988cd381fd3f0fe98f",
    "id": null,
    "metadata": {},
    "name": "LogOutMutation",
    "operationKind": "mutation",
    "text": "mutation LogOutMutation(\n  $input: LogOutInput!\n) {\n  logOut(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "ae954793128e09db0832af4660ddd0db";

module.exports = ((node/*: any*/)/*: Mutation<
  LogOutMutation$variables,
  LogOutMutation$data,
>*/);
