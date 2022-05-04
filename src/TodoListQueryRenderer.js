import React from 'react';
import { View, Text } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

// prerequisite: properly configured relay environment
import environment from '../relay/environment';

// This will be created in the next steps
import TodoList from './TodoList';

const TodoListQueryRenderer = () => {
    return (
        // The QueryRenderer acts as a wrapper to any code, providing query results to
        // the child components and updating them as needed
        // Note that the query is using a fragment called TodoList_query,
        // which will be created in the next steps
        <QueryRenderer
            environment={environment}
            query={graphql`
            query TodoListQueryRendererQuery {
              ...TodoList_query
            }
          `}
            variables={null}
            render={({ error, props }) => {
                if (error) {
                    return (
                        <View>
                            <Text>{error.message}</Text>
                        </View>
                    );
                } else if (props) {
                    return <TodoList query={props} />;
                }
                return (
                    <View>
                        <Text>Loading...</Text>
                    </View>
                );
            }}
        />
    );
}

export default TodoListQueryRenderer;