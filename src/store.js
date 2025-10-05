export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: []
  }

}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'edit_contact':

      const { name, phone, email, address } = action.payload

      return {
        ...store,
        contacts: store.contacts.map((contact) => (contact.id === id ? {
          ...contact,
          name: name,
          phone: phone,
          email: email,
          address: address
        } : contact))
      };
    case 'set_contacts':
      return {
        ...store,
        contacts: action.payload // payload es un array de contactos
      };
    default:
      throw Error('Unknown action.');
  }
}
