import React from 'react';
import styled from 'styled-components';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture>
          <Source
            type="image/avif"
            srcSet={`${src.replace('.jpg', '.avif')} 1x, ${src.replace('.jpg', '@2x.avif')} 2x, ${src.replace('.jpg', '@3x.avif')} 3x`}
          />
          <Source
            type="image/jpeg"
            srcSet={`${src} 1x, ${src.replace('.jpg', '@2x.jgp')} 2x, ${src.replace('.jpg', '@3x.jgp')} 3x`}
          />
          <Image src={src} alt={alt}/>
        </Picture>
      </Anchor>
      <Tags columns={tags.length}>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Picture = styled.picture``;

const Source = styled.source``;

const Tags = styled.ul`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
