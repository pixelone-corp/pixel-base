import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export interface DCBreadcrumbsProps {
  className: string
  data: any
}

const StyledDCBreadcrumbs = styled(Breadcrumb)`
  ol {
    margin: 0;
  }
  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    a {
      text-decoration: none;
      color: #43476b;
      font-weight: 500;
      font-size: 0.75rem;
    }
    &.active {
      color: #787c9e;
      font-weight: 500;
      font-size: 0.75rem;
      &:before {
        opacity: 0.6 !important;
      }
    }
    &:before {
      content: ' ' !important;
      color: #787c9e;
      font-size: 7px;
      width: 8px; /* Adjust width and height if needed */
      height: 8px;
      /* display: inline-block; */

      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMC4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNDQ4Yy04LjE4OCAwLTE2LjM4LTMuMTI1LTIyLjYyLTkuMzc1Yy0xMi41LTEyLjUtMTIuNS0zMi43NSAwLTQ1LjI1TDE3OC44IDI1Nkw0MS4zOCAxMTguNmMtMTIuNS0xMi41LTEyLjUtMzIuNzUgMC00NS4yNXMzMi43NS0xMi41IDQ1LjI1IDBsMTYwIDE2MGMxMi41IDEyLjUgMTIuNSAzMi43NSAwIDQ1LjI1bC0xNjAgMTYwQzgwLjM4IDQ0NC45IDcyLjE5IDQ0OCA2NCA0NDh6Ii8+PC9zdmc+);
      display: inline-block;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-position: center center;
      float: none !important;
      margin-right: 8px;
      opacity: 0.4;
    }
    &:first-child:before {
      content: none !important; /* Remove angle for the first breadcrumb */
    }
  }
`

export const DCBreadcrumbs = React.forwardRef<
  HTMLDivElement,
  DCBreadcrumbsProps
>(({ className, data, ...rest }, ref) => {
  return (
    <React.Fragment>
      <BrowserView>
        <StyledDCBreadcrumbs>
          {data.length &&
            data.map((item, index) => (
              <Breadcrumb.Item
                linkAs={item.link ? Link : undefined}
                key={index}
                active={item.active}
                linkProps={{ to: item.link }}
              >
                {item.name}
              </Breadcrumb.Item>
            ))}
        </StyledDCBreadcrumbs>
      </BrowserView>
      <MobileView>
        <StyledDCBreadcrumbs>
          <Row>
            {data.length > 2 && (
              <React.Fragment>
                <Link to={data[data.length - 2].link}>
                  <FontAwesomeIcon icon={faArrowLeftLong} />
                </Link>
              </React.Fragment>
            )}
            <Breadcrumb.Item
              linkAs={data[data.length - 1].link ? Link : undefined}
              key={1}
              active={data[data.length - 1].active}
              linkProps={{ to: data[data.length - 1].link }}
            >
              {data[data.length - 1].name}
            </Breadcrumb.Item>
          </Row>
        </StyledDCBreadcrumbs>
      </MobileView>
    </React.Fragment>
  )
})

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export default DCBreadcrumbs
