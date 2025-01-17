import React from 'react';
import Card from 'react-bootstrap/Card';

class MovieItem extends React.Component{
    render()
    {
        return(
            <div>
                <Card>
                    <Card.Header>{this.props.movie.title}
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.movie.poster}></img>
                        <footer className="blockquote-footer">
                            {this.props.movie.year}            
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default MovieItem;