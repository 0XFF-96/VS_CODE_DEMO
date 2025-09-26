import React, { useState } from 'react'
import './PhotoWall.css'

interface Photo {
  id: number
  src: string
  title: string
  caption: string
  category: 'tournament' | 'players' | 'highlights'
}

const PhotoWall: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  // Sample photos with tennis-themed placeholder images
  const photos: Photo[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop',
      title: 'Championship Final',
      caption: 'Epic finals match from Tennis Summer Cup 2024',
      category: 'tournament'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=600&fit=crop',
      title: 'Rising Star',
      caption: 'Young talent showcasing incredible skill',
      category: 'players'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      title: 'Victory Moment',
      caption: 'The moment that defined the championship',
      category: 'highlights'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=500&fit=crop',
      title: 'Court Action',
      caption: 'Intense rally during semifinals',
      category: 'tournament'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1530915365347-e35b21b6c800?w=400&h=300&fit=crop',
      title: 'Champion Celebration',
      caption: 'Trophy presentation ceremony',
      category: 'highlights'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1544737151404-6e4b99f0d7c4?w=400&h=600&fit=crop',
      title: 'Professional Serve',
      caption: 'Perfect form and technique display',
      category: 'players'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop',
      title: 'Crowd Energy',
      caption: 'Fans cheering for their favorite players',
      category: 'tournament'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      title: 'Tennis Equipment',
      caption: 'Professional tennis gear showcase',
      category: 'highlights'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1511067007398-7e4b90cdb2a5?w=400&h=500&fit=crop',
      title: 'Team Spirit',
      caption: 'Doubles partners celebrating victory',
      category: 'players'
    }
  ]

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'tournament', label: 'Tournament' },
    { key: 'players', label: 'Players' },
    { key: 'highlights', label: 'Highlights' }
  ]

  return (
    <section className="photo-wall">
      <div className="photo-wall-container">
        <div className="section-header">
          <h2 className="section-title">Tournament Gallery</h2>
          <p className="section-subtitle">
            Relive the excitement from previous Tennis Summer Cup events
          </p>
        </div>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-button ${selectedCategory === category.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="photo-grid">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`photo-item ${index % 3 === 0 ? 'tall' : index % 5 === 0 ? 'wide' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="photo-wrapper">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  loading="lazy"
                />
                <div className="photo-overlay">
                  <div className="photo-content">
                    <h3 className="photo-title">{photo.title}</h3>
                    <p className="photo-caption">{photo.caption}</p>
                    <span className={`photo-category ${photo.category}`}>
                      {photo.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <button className="view-more-button">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  )
}

export default PhotoWall