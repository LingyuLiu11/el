/**
 * @generated SignedSource<<7e91c5faa00e6f3246bf86ac99d9d66a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateTodoInput = {|
  id: string,
  fields?: ?UpdateTodoFieldsInput,
  clientMutationId?: ?string,
|};
export type UpdateTodoFieldsInput = {|
  ACL?: ?ACLInput,
  title?: ?string,
  done?: ?boolean,
|};
export type ACLInput = {|
  users?: ?$ReadOnlyArray<UserACLInput>,
  roles?: ?$ReadOnlyArray<RoleACLInput>,
  public?: ?PublicACLInput,
|};
export type UserACLInput = {|
  userId: string,
  read: boolean,
  write: boolean,
|};
export type RoleACLInput = {|
  roleName: string,
  read: boolean,
  write: boolean,
|};
export type PublicACLInput = {|
  read: boolean,
  write: boolean,
|};
export type UpdateTodoMutation$variables = {|
  input: UpdateTodoInput,
|};
export type UpdateTodoMutation$data = {|
  +updateTodo: ?{|
    +todo: {|
      +id: string,
      +title: ?string,
      +done: ?boolean,
    |},
  |},
|};
export type UpdateTodoMutation = {|
  variables: UpdateTodoMutation$variables,
  response: UpdateTodoMutation$data,
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
    "concreteType": "UpdateTodoPayload",
    "kind": "LinkedField",
    "name": "updateTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
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
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "done",
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
    "name": "UpdateTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5a35cfbdb6dd6574498ac009cd8978a9",
    "id": null,
    "metadata": {},
    "name": "UpdateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateTodoMutation(\n  $input: UpdateTodoInput!\n) {\n  updateTodo(input: $input) {\n    todo {\n      id\n      title\n      done\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "5e479090647aa11b23f500f71fd8be22";

module.exports = ((node/*: any*/)/*: Mutation<
  UpdateTodoMutation$variables,
  UpdateTodoMutation$data,
>*/);
