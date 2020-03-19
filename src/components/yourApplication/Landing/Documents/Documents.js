import React, { Component } from 'react';
import './styles.css';
import Rightbar from '../../../home/rightbar/rightbar';
import { Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
  faBiking,
  faHandshake,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  chceck = id => {
    const ids = [1, 2, 3];
    const el = document.getElementsByClassName('documents-post-method')[id];
    el.classList.add('documents-post-method-checked');
    let filteredIds = ids.filter((value, index, array) => {
      if (value !== id) {
        return value;
      }
    });

    for (let i = 0; i < filteredIds.length; i++) {
      const element = document.getElementsByClassName('documents-post-method')[
        filteredIds[i]
      ];
      el.classList.remove('documents-post-method-checked');
    }

    console.log(filteredIds);
  };

  render() {
    return (
      <>
        <Col lg={18}>
          <div className="documents-container">
            <div className="documents-container-text">
              <p>
                <strong>
                  Please confirm the following documents are in the envelop
                  before you close the envelop:
                </strong>
              </p>
            </div>
            <div className="documents-table-heading">
              <p>Document</p>
              <div className="documents-table-included">
                <p>Included</p>
              </div>
            </div>
            <div className="documents-table-container">
              <DocumentsTable
                title="Signed mortgage application"
                included={true}
              />
              <DocumentsTable
                title="Signed declaration of consent"
                included={true}
              />
              <DocumentsTable
                title="Certified I.D. (Passport, drivers licence)"
                included={true}
              />
              <DocumentsTable title="Original utility bill" included={false} />
              <DocumentsTable
                title="Completed salary certificate"
                included={false}
              />
              <DocumentsTable title="Document name" included={false} />
              <DocumentsTable title="Document name" included={true} />
              <DocumentsTable title="Document name" included={false} />
              <DocumentsTable title="Document name" included={false} />
              <DocumentsTable title="Document name" included={true} />
              <DocumentsTable title="Document name" included={false} />
              <DocumentsTable title="Document name" included={false} />
              <DocumentsTable title="Document name" included={true} />
              <DocumentsTable title="Document name" included={false} />
            </div>
            <div className="documents-sentBy">
              <div className="documents-sentBy-left">
                <strong style={{ marginTop: '-6px' }}>Sent by:</strong>
              </div>
              <div className="documents-sentBy-middle">
                <div>
                  <p>Freepost mail</p>
                </div>
                <div
                  className="documents-post-method"
                  onClick={() => this.chceck(1)}
                >
                  <FontAwesomeIcon
                    size="lg"
                    icon={faEnvelope}
                    style={{ marginRight: '20px' }}
                  />
                  <FontAwesomeIcon size="lg" icon={faCheckSquare} />
                </div>
                <div>
                  <p>Courier</p>
                </div>
                <div
                  className="documents-post-method"
                  onClick={() => this.chceck(2)}
                >
                  <FontAwesomeIcon
                    size="lg"
                    icon={faBiking}
                    style={{ marginRight: '20px' }}
                  />
                  <FontAwesomeIcon size="lg" icon={faCheckSquare} />
                </div>
                <div>
                  <p>Hand delivered</p>
                </div>
                <div
                  className="documents-post-method"
                  onClick={() => this.chceck(3)}
                >
                  <FontAwesomeIcon
                    size="lg"
                    icon={faHandshake}
                    style={{ marginRight: '20px' }}
                  />
                  <FontAwesomeIcon size="lg" icon={faCheckSquare} />
                </div>
              </div>
              <div className="documents-sentBy-right">3</div>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" lg={6}>
          <div className="gutter-box rightbar-container">
            <Rightbar />
          </div>
        </Col>
      </>
    );
  }
}

class DocumentsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, included } = this.props;
    return (
      <div className="documents-table-data">
        <p>{title}</p>
        <div className="documents-table-included">
          {included ? <p>Included</p> : <p>Not Included</p>}
        </div>
      </div>
    );
  }
}

export default Documents;
