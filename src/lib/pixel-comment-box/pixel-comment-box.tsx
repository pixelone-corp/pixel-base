import React from 'react'
import PixelText from '../pixel-text/pixel-text'
import styled from 'styled-components'
import moment from 'moment'
import { SectionContent } from '../common-styled-component'
export interface PixelCommentBoxProps {
  data: Array<{
    created_by?: string
    comment_text?: string
    created_at?: string
  }>
}
export const PixelCommentBox = React.forwardRef<
  HTMLInputElement,
  PixelCommentBoxProps
>(({ data, ...rest }, ref) => {
  return (
    <CommentContainer>
      {Array.isArray(data) && data.length != 0 ? (
        data?.map((commentData, index) => (
          <SectionContent style={{ minHeight: 'auto' }}>
            <CommentSection key={index}>
              <CommentSectionUpper>
                <Commentator>{commentData.created_by}</Commentator>
                <PixelText
                  variant='light'
                  textSize='11px'
                  style={{
                    fontWeight: '400',
                    paddingTop: '5px',
                    color: 'rgba(0, 0, 0, 0.84)'
                  }}
                >
                  {moment(commentData.created_at).fromNow()}
                </PixelText>
              </CommentSectionUpper>
              <CommentSectionLower>
                <Comment>{commentData.comment_text}</Comment>
              </CommentSectionLower>
            </CommentSection>
          </SectionContent>
        ))
      ) : (
        <CommentContainerofNoData>No Comments</CommentContainerofNoData>
      )}
    </CommentContainer>
  )
})
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 374px;
  margin-top: 10px;
  padding: 5px;
`

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  margin-left: 5px;
`
const CommentSectionUpper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`
const Commentator = styled.div`
  font-size: 17px;
  font-weight: 700;
`
const CommentSectionLower = styled.div`
  width: 100%;
`
const Comment = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: #525252;
`
const CommentContainerofNoData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 10px;
  gap: 5px;
  margin: auto;
  width: 100%;
  background-color: aqua;
  font-weight: 700;
`

export default PixelCommentBox
