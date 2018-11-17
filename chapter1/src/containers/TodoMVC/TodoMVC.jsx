import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainArea from './MainArea';
import 'todomvc-app-css';

const TodoMVC = () => (
  <section className="todoapp">
    <Header />
    <MainArea />
    <Footer />
  </section>
);

export default TodoMVC;
