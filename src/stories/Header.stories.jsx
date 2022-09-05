import { Header } from './Header';

export default {
  title: 'comp/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = args => <Header {...args} />;

export const LoggedIn = Template.bind({});

LoggedIn.args = {
  user: 'Olivia'
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
