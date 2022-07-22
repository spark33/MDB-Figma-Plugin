const data = [
  {
    id: 'PD-2188',
    name: 'Clarify the onChange args on Select',
    components: ['Select'],
    description:
      'The `onChange` prop on Select has a different signature than a native `<select>`. This should be called out. Specifically:\n-   The function takes 2 arguments: the value of the selected element and the event object\n-   The event object is the click event with `event.target` being the Option `<li>` element. \nOn a native element this would be the change event with the `target` being the `<select>` itself. Consumers should consume the value from the first arg of the callback itself. Accessing other attributes of Select will need to use refs instead of event.target.',
    labels: ['Label 1', 'Label 2'],
    fix_version: 'this_quarter',
    status: 'In Review',
    url: 'https://jira.mongodb.org/projects/PD/issues/PD-2188',
  },
  {
    id: 'PD-2188',
    name: 'Clarify the onChange args on Select',
    components: ['Select'],
    description:
      'The `onChange` prop on Select has a different signature than a native `<select>`. This should be called out. Specifically:\n-   The function takes 2 arguments: the value of the selected element and the event object\n-   The event object is the click event with `event.target` being the Option `<li>` element. \nOn a native element this would be the change event with the `target` being the `<select>` itself. Consumers should consume the value from the first arg of the callback itself. Accessing other attributes of Select will need to use refs instead of event.target.',
    labels: ['Label 1', 'Label 2'],
    fix_version: 'this_quarter',
    status: 'In Review',
    url: 'https://jira.mongodb.org/projects/PD/issues/PD-2188',
  },
];

export default data;
