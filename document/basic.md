## 序章 - 基礎から学ぶコンポーネントの作り方 -

### React.js とは

React.js とはレンダリングした DOM の変更差異だけを部分的にレンダリングする仮想 DOM という機能を持った View のライブラリです。また作成したコンポーネント内部で state という状態を保持することが出来、内部で指定した状態を変更することで、レンダリングした DOM に state が反映されている箇所のみの差分描画を行うことが出来ます。
React.js 自体は色々な API がありますが、View のライブラリなのでフルスタックなフレームワークと比較すると小さなライブラリになります。もちろん View 用のライブラリだけだと実際に業務で作成するような規模のアプリケーションを作成するのは難しいと思います。基本的には Redux や MobX といった、状態を司るライブラリと併用して保守性のあるアプリケーションを作成するのが一般的だと思います。
ただ、React.js はコンポーネントの作り方一つを取っても非常にバリエーション豊かな記述方法があります。今回はそんなコンポーネントの記述方法を網羅的に解説して行きたいと思います。

### 本書の下準備

今回使用するコードのサンプルは GitHub のリポジトリにあります。
https://github.com/takahiro-saeki/react-example-code
README を参考に手元に環境を構築してください。

#### 免責事項

上記のリポジトリ内にある環境では、eslint、prettier、そして flow-type という型定義や formatter を使用しています。本書では紙面の都合上、特に flow-type の記述がされている部分を省略して記載しています。実際にリポジトリをご覧になられる際に念の為念頭に置いて頂けると幸いです。

### class component の書き方について

まずは初めに、一番基礎となる class component についての書き方を見て行きましょう。

```
import React, { Component } from 'react';
import moment from 'moment';

export default class ClassComponent extends Component {
  state = {
    time: moment().format('YYYY/MM/DD HH:mm ss')
  };

  componentDidMount() {
    setInterval(() => this.updateMethod(), 1000);
  }

  updateMethod = () => {
    this.setState({
      time: moment().format('YYYY/MM/DD HH:mm ss')
    });
  };

  render() {
    const { time } = this.state;

    return (
      <div>
        time is: <time>{time}</time>
      </div>
    );
  }
}
```

まず React class を生成し、componentDidMount が完了した後に 1 秒毎に現在の時間をアップデートしています。
React.js には componentDidMount や componentDidUpdate など、いくつかのライフサイクルメソッドがあり、今回に componentDidMount はこのコンポーネントがレンダリングされた後に発火されるメソッドになります。
updateMethod を見てみると、this.setState() で現在の時間をレンダリングしています。またこのサンプルでは moment.js という時間や日付を扱うライブラリを使用しています。
これは React.js のチュートリアルでも記述のあるもっとも基本的な記述の仕方になります。恐らく本書を手に取っている読者の方もこの記述に慣れている方も多いでしょう。次の記述方法も頻繁に使用される記述の仕方になります。

### stateless functional component の書き方について

stateless functional component(以下 SFC) とは、関数で React component を記述する方法になります。まずは先にコードをご覧ください。

```
import React from 'react';

const CounterBtn = ({ title, onClick }) => (
  <button type="button" onClick={onClick}>
    {title}
  </button>
);

export default CounterBtn;
```

React.js には state だけではなく、props という物も存在します。これは React component をネストして読み込んだ際に、上の階層から下の階層にプロパティを流し込む役割を持ちます。上記のサンプルを見ると、ボタンのタイトルに当たる title、ボタンをクリックした際に発火する onClick の関数を CounterBtn に流し込んでいます。
またこの CounterBtn には親のコンポーネントが存在しており、下記のようになっています。

```
import React, { Component } from 'react';
import Counter from './Counter';
import CounterBtn from './CounterBtn';

export default class CounterContainer extends Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  subtract = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  asyncAdd = async () => {
    await setTimeout(
      () => this.setState(({ count }) => ({ count: count + 1 })),
      1000
    );
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <CounterBtn title="+" onClick={this.add} />
        <CounterBtn title="-" onClick={this.subtract} />
        <CounterBtn title="async add" onClick={this.asyncAdd} />
        <CounterBtn title="reset" onClick={this.reset} />

        <Counter count={count} />
      </div>
    );
  }
}

```

4 つの CounterBtn が render method 内で使用されており、上から順番に、クリックする度に count の値を 1 増加させるボタン、クリックする度に count の値を 1 減少させるボタン、クリックをする度に 1 秒後に count の値を 1 増加するボタン、最後に count の値を 0 に戻すボタンになります。
SFC のメリットとしては class でコンポーネントを記述するよりも少ない記述行数で済むという大きなメリットがあります。また React component とはいえ、関数ですし、コンポーネント内部に状態を持たないのでテストが書きやすくなります。なるべく class component には副作用のある処理や state を扱う処理のみを記述し、SFC 内には View のみをシンプルに記述するのが良いでしょう。
また SFC の中にさらにネストして SFC を記述することが出来るので、プロジェクト内でフロントエンドのメンバーがいる場合は適宜コンポーネントの粒度を相談しつつ、なるべく小さなコンポーネントに保つようにすると良いと思います。

### higher order component の書き方について

higher order component とは、引数に入れた React component を関数内で新たに生成する React component の中の render method 内でレンダリングする手法になります。まずはコードを見てみましょう。

```
import React from 'react';
import HOC from './HOC';

const Example = ({ isLoaded, msg }) => (
  <div>{isLoaded ? <img src={msg} width={300} alt="dog" /> : msg}</div>
);

export default HOC(Example);
```

今回の例だと HOC という関数に React component を引数に入れて export しています。それでは HOC の内部を見てみましょう。

```
import React, { Component } from 'react';

const HOC = WrappedComponent =>
  class extends Component {
    state = {
      isLoaded: false,
      msg: 'now loading ...'
    };
    componentDidMount() {
      this.request();
    }

    request = async () => {
      const PATH = 'https://dog.ceo/api/breeds/image/random';
      const dataFetch = await fetch(PATH);
      const json = await dataFetch.json();
      this.setState({ isLoaded: true, msg: json.message });
    };

    render() {
      return <WrappedComponent {...this.state} />;
    }
  };

export default HOC;
```

今回、Dog Api という犬の画像の API を使用しています。まず、引数に WrappedComponent という React component を受け取る引数を用意して、この関数の返り値に新たな React component を生成しています。その新たな React component 内で API に対するリクエスト処理 componentDidMount で行い、リクエスト処理が終了次第、setState で行い now loading の表示から画像の表示に切り替えます。HOC を使用するケースとしては react-redux で connect 関数を使用して store の中から必要な値だけを component の props として提供する mapStateToProps、dispatch(action(arg))といった記述を action(arg)という形で dispatch を省略して action を使用出来るようにする、mapDispatchToProps などを入れて使用するのが有名だと思います。react-redux の場合は hurry 化された関数内の最初の引数に option となる値や object を、返り値の引数に React component を代入しています。

下記のサンプルは curry 化された関数を使用しています。

```
// @flow

import React from 'react';
import { v4 } from 'uuid';
import mock from './mock';
import HOC from './HOC';
import { MainArea, List, NameArea, ColorArea } from './style';

const config = {
  ignore: 'beige',
  order: 'shuffle',
  data: mock
};

const Example = ({ data }) => (
  <MainArea>
    {data.map(item => (
      <List key={v4()}>
        <NameArea>{item.name}</NameArea>
        <ColorArea color={item.color}>{item.color}</ColorArea>
      </List>
    ))}
  </MainArea>
);

export default HOC(config)(Example);
```

まず、React は仮想 DOM で差分描画を行う為に、同一子要素を複数レンダリングする場合、key という props を使用して key の値を入れないと効率的に差分描画を行いません。なので uuid という uu な ID を生成するライブラリを使用しています。
HOC 関数の適用箇所を見てみると config という引数を代入しています。また返り値の引数には Example という React component を適用しています。
それでは HOC がどのような記述がされているか見てみましょう。

```
import React from 'react';
import { shuffle } from 'lodash';

const HOC = config => {
  const { ignore, order, data } = config;
  let items = data;
  if (ignore) {
    const deleteItems = items.filter(({ name }) => name !== ignore);
    items = deleteItems;
  }
  switch (order) {
    case 'asc':
      {
        items = items.sort();
      }
      break;
    case 'des':
      {
        items = items.sort().reverse();
      }
      break;
    case 'shuffle':
      {
        items = shuffle(items);
      }
      break;
    default: {
      items = items.sort();
    }
  }
  return WrappedComponent => () => <WrappedComponent data={items} />;
};

export default HOC;
```

一見シンプルな記述に見えますが、関数内の処理順としては `configという引数を受け取る => config内の設定を参照して配列操作 => 新たなReact componentの作成` というような順序になっています。関数内で return する回数が 1 回増える、というようなイメージですね。簡単に上記のコードを説明すると config 内の order key を参照して配列の中身の操作を行なっています。また ignore に指定した値を配列から除外する処理も行なっています。
また style の適用に styled-components を使用しています。styled-components とは、style の定義を React component としてしようする事が出きるライブラリで、今回のサンプル内だと下記のような記述を行なっています。

```
import styled from 'styled-components';

export const MainArea = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const List = styled.li`
  display: flex;
  padding: 0.5rem;
`;

export const NameArea = styled.div`
  width: 140px;
`;

export const ColorArea = styled.div`
  background: ${({ color }) => color};
  padding: 0 0.5rem;
`;
```

こういった style のライブラリは色々な種類が存在していますが、個人的には styled-components が一番使い易いので個人的に愛用しています。賛否両論ありますが、style も React component として振る舞えるのは便利であると同時に理にかなっていると思います。

### Decorator を使用した書き方について

Decorator とは、curry 化された HOC の糖衣構文ですが、注意点として class に対してしか適用する事が出来ません。
先にコードを見てみましょう。

```
import React, { Component } from 'react';
import { camelCase, random } from 'lodash';
import NumberField from './NumberField';
import decoratorExample from './decoratorExample';

@decoratorExample({
  component: NumberField,
  props: {
    title: 'Generator'
  },
  parentProps: {
    message: {
      sameValue: '同じ値です。',
      overMaxValue: '最小値が最大値よりも大きいです。',
      emptyValue: '最大値、最小値に値を入力してください。'
    }
  }
})
class Decorator extends Component {
  state = {
    minRange: 1,
    maxRange: 2,
    errorMsg: '',
    result: 0
  };

  handleChange = ({ type, value }) => {
    const toNumber = Number(value);
    if (isNaN(toNumber)) {
      return;
    }
    this.setState(state => ({
      ...state,
      [camelCase(type)]: toNumber === 0 ? '' : toNumber
    }));
  };

  generate = () => {
    const { minRange, maxRange } = this.state;
    const { message } = this.props;

    if (!minRange || !maxRange) {
      this.setState(state => ({
        ...state,
        errorMsg: message.emptyValue
      }));
      return;
    }
    if (minRange === maxRange) {
      this.setState(state => ({ ...state, errorMsg: message.sameValue }));
      return;
    }
    if (minRange > maxRange) {
      this.setState(state => ({
        ...state,
        errorMsg: message.overMaxValue
      }));
      return;
    }
    this.setState(state => ({
      ...state,
      result: random(minRange, maxRange),
      errorMsg: ''
    }));
  };

  render() {
    const { children } = this.props;
    return children({
      ...this.state,
      formChange: this.handleChange,
      invoke: this.generate
    });
  }
}

export default Decorator;
```

`@decoratorExample()` の部分が Decorator を適用している箇所になります。今回のサンプルでは `@decoratorExample()` の引数内に object 形式で引数を受け取り、その引数の object 内には component、props、parentProps という 3 つの key と value を内包しています。component はレンダリングする React component、props はコンポーネントに対して受け渡すデフォルトの props の値、paretnProps は Decorator class component に対して受け渡す props の値になります。下記が decoratorExample 関数の内部になります。

```
import React from 'react';

const decoratorExample = config => {
  const { props, component, parentProps } = config;
  const Component = component;
  return WrappedComponent => () => (
    <WrappedComponent {...parentProps}>
      {mergeProps =>
        component ? <Component {...props} {...mergeProps} /> : null
      }
    </WrappedComponent>
  );
};

export default decoratorExample;
```

このサンプルの次に紹介する render props をしれっと使用していますが、HOC の解説で行なった処理の流れとほぼ同じような感じになっていると思います。 `WrappedComponent` コンポーネント内でアロー関数を使用している部分は Decorator class component の下記の部分

```
  ...
  render() {
    const { children } = this.props;
    return children({
      ...this.state,
      formChange: this.handleChange,
      invoke: this.generate
    });
  }
  ...
```

上記の render method 内で `children` を関数として使用しています。 `children` を関数として使用すると `children` 内で代入された引数を実際にコンポーネントの使用する際に無名関数として実行して受け取る事ができます。
また合わせて NumberField.jsx の内部も見てみましょう。

```
import React from 'react';
import { MainArea, TextInput, ErrorMsg } from './style';

const NumberField = ({
  minRange,
  maxRange,
  result,
  invoke,
  formChange,
  errorMsg,
  title
}: Props) => (
  <div>
    <h1>{title}</h1>
    <div>result is: {result}</div>
    <MainArea>
      <TextInput
        value={minRange}
        onChange={e => formChange({ type: 'min-range', value: e.target.value })}
      />
      <div>〜</div>
      <TextInput
        value={maxRange}
        onChange={e => formChange({ type: 'max-range', value: e.target.value })}
      />
    </MainArea>
    <button type="button" onClick={invoke}>
      Submit
    </button>
    {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
  </div>
);

NumberField.defaultProps = {
  result: 0
};

export default NumberField;
```

最終的にここに色々な処理が加わった最終的な props が代入されます。

### Render Props の書き方について

Render Props とは、Decorator の際にも少し説明しましたが、 `this.props.children` を関数で使用した際に代入した引数の値をコンポーネントを使用した際に無名関数として受け取る事が出来る記述方法になります。下記は極力シンプルに書いた render props になります。

```
import React from 'react';
import ToggleHelper from './ToggleHelper';

const RenderProps = () => (
  <ToggleHelper init>
    {({ toggle, changeToggle }) => (
      <div>
        <div>condition: {toggle ? 'true' : 'false'}</div>
        <button type="button" onClick={changeToggle}>
          change toggle
        </button>
      </div>
    )}
  </ToggleHelper>
);

export default RenderProps;
```

この ToggleHelper コンポーネント内部で children の設定を行なっています。

```
import { Component } from 'react';

export default class ToggleHelper extends Component {
  static defaultProps = {
    init: false
  };

  state = {
    toggle: false
  };

  componentDidMount() {
    this.initialize();
  }

  changeToggle = () => {
    this.setState(({ toggle }) => ({ toggle: !toggle }));
  };

  initialize = () => {
    const { init } = this.props;
    this.setState({ toggle: init });
  };

  render() {
    const { toggle } = this.state;
    const { children } = this.props;
    return children({ toggle, changeToggle: this.changeToggle });
  }
}
```

changeToggle method を発火する度に toggle の判定を変更するようになっています。通常 render props を生成する際は render props を構成する側のコンポーネントの内で隠蔽したい状態を構成し、親側のコンポーネントの props の値を入れる事でコントロールするようにします。

### Compound Components の書き方について

Compound Components とは、ラッパーコンポーネント内に単一、或いは複数のコンポーネントを内包し、ラッパーコンポーネント内部の state を参照して内部のコンポーネント管理する方法になります。また合わせて `<App.Button />` のような React component を Object を使用する時のような書き方も合わせて紹介します。

```
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  static HeaderArea = () => <Header title="header" />;
  static FooterArea = () => <Footer title="footer" />;

  render() {
    const { children } = this.props;
    return children;
  }
}
```

上記の記述は Header、Footer というコンポーネントを static method 内には設置し、children を render method 内で返しています。また下記が実際に使用する際の記述方法になります。

```
import React from 'react';
import App from './App';
import Container from './style';

const CompoundExample = () => (
  <div>
    <App.HeaderArea />
    <Container>main area</Container>
    <App.FooterArea />
  </div>
);

export default CompoundExample;
```

このように、App class component 内で指定した static method の名前を `App` コンポーネントを通して呼び出す事で、Header や Footer を表示する事が出来ます。
下記は少し複雑な例になります。

```
import React, { Component, Children, cloneElement } from 'react';
import { SwitchBtn, MainArea } from './style';

export default class CardLists extends Component {
  static RedCard = ({ type }) =>
    type === 'red' ? (
      <MainArea bg={type} color="white">
        red
      </MainArea>
    ) : null;
  static YellowCard = ({ type }) =>
    type === 'yellow' ? <MainArea bg={type}>yellow</MainArea> : null;
  static BlueCard = ({ type }) =>
    type === 'blue' ? (
      <MainArea bg={type} color="white">
        blue
      </MainArea>
    ) : null;
  static SelectField = ({ changeType }) => (
    <ul>
      <SwitchBtn bg="red" color="white" onClick={() => changeType('red')}>
        red
      </SwitchBtn>
      <SwitchBtn bg="yellow" onClick={() => changeType('yellow')}>
        yellow
      </SwitchBtn>
      <SwitchBtn bg="blue" color="white" onClick={() => changeType('blue')}>
        blue
      </SwitchBtn>
    </ul>
  );
  state = {
    currentType: 'red'
  };

  changeType = type => {
    this.setState({ currentType: type });
  };

  render() {
    const { children } = this.props;
    const { currentType } = this.state;
    return Children.map(children, child =>
      cloneElement(child, {
        type: currentType,
        changeType: this.changeType
      })
    );
  }
}

```

まず、 `RedCard` 、 `YellowCard` 、 `BlueCard` という 3 つのコンポーネントを static method に登録しています。
また `changeType` method を発火する毎に `CardLists` 内部の state を変更しています。注目すべきは render method 内です。通常の children の記述ではなく、 `Children.map()` で子要素を一つずつ要素をクローンし、props に changeType method と現在の type を埋め込みます。

```
import React from 'react';
import CardLists from './CardLists';

const Example2 = () => (
  <CardLists>
    <CardLists.SelectField />
    <CardLists.RedCard />
    <CardLists.YellowCard />
    <CardLists.BlueCard />
  </CardLists>
);

export default Example2;
```

こうする事で、上記のように実際に使用する際は複雑は記述は無く、シンプルにコンポーネントを並べるだけで使用する事が出来ます。個人的な見解ですが、一見使用する際は見た目がスッキリしていて良いですが、大元の component を構築する際に色々と考慮しなくてはいけない事が多かったりするのであまり使用する機会は無いのかなと思います。また効果的に Compound Component をプロダクションで使用している例があれば是非知りたいです。

### hooks の書き方について
