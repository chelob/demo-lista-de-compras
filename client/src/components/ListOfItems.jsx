import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import { Table } from 'semantic-ui-react';
import { EmptyList } from './EmptyList';

export class ListOfItems extends React.Component {
  handleClick = index => (e) => {
    e.preventDefault();
    this.props.removeAction(index);
  }

  render() {
    return (
      <div>
        {this.props.entries.length === 0 ? (
          <EmptyList />
        ) : (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell key='count'>Cantidad</Table.HeaderCell>
                <Table.HeaderCell key='name'>Nombre</Table.HeaderCell>
                <Table.HeaderCell key='category'>Categoría</Table.HeaderCell>
                <Table.HeaderCell key='remove' />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.entries.map(([ key, item ]) => (
                <Table.Row key={item.id}>
                  <Table.Cell key={`${item.id}1`}>
                    {item.count}
                  </Table.Cell>
                  <Table.Cell key={`${item.id}2`}>
                    {item.name}
                  </Table.Cell>
                  <Table.Cell key={`${item.id}3`}>
                    {item.category}
                  </Table.Cell>
                  <Table.Cell key={`${item.id}4`}>
                    <a
                      href=''
                      onClick={this.handleClick(item.id)}
                    >Eliminar</a>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </div>
    );
  }
}

ListOfItems.propTypes = {
  entries: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  removeAction: PropTypes.func.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default ListOfItems;
