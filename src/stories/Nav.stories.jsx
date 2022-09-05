import Nav from '../components/Nav';

export default {
  title: 'comp/Nav',
  component: Nav,
  argTypes: {}
};

const Template = args => <Nav {...args} />;

export const PrimaryNav = Template.bind({});
PrimaryNav.args = {};
