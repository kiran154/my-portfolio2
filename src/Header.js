class Header extends Component {
    render() {
      return (
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.address}</p>
          <p>{this.props.qualification}</p>
          <p>{this.props.workexperience}</p>
          <p>{this.props.training}</p>
        </div>
      );
    }
  }
  