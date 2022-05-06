/**
 * @generated SignedSource<<4daa3864f08f8dc2326a0847d299be40>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type SignUpInput = {|
  fields?: ?CreateUserFieldsInput,
  clientMutationId?: ?string,
|};
export type CreateUserFieldsInput = {|
  ACL?: ?ACLInput,
  username: string,
  password: string,
  email?: ?string,
  emailVerified?: ?boolean,
  authData?: ?any,
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
export type SignUpMutation$variables = {|
  input: SignUpInput,
|};
export type SignUpMutation$data = {|
  +signUp: ?{|
    +viewer: {|
      +user: {|
        +id: string,
        +username: ?string,
        +createdAt: any,
      |},
      +sessionToken: string,
    |},
  |},
|};
export type SignUpMutation = {|
  variables: SignUpMutation$variables,
  response: SignUpMutation$data,
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
    "concreteType": "SignUpPayload",
    "kind": "LinkedField",
    "name": "signUp",
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
                "name": "username",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
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
    "name": "SignUpMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignUpMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a32c7111ca179790f5c11fe4119868ee",
    "id": null,
    "metadata": {},
    "name": "SignUpMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpMutation(\n  $input: SignUpInput!\n) {\n  signUp(input: $input) {\n    viewer {\n      user {\n        id\n        username\n        createdAt\n      }\n      sessionToken\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "62f208d5363cb3525bfac13df1043b71";

module.exports = ((node/*: any*/)/*: Mutation<
  SignUpMutation$variables,
  SignUpMutation$data,
>*/);
