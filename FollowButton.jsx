.follow-button {
  /* Layout */
  width: 233px;
  height: 91px;
  
  /* Appearance */
  background: linear-gradient(135deg, #667EEA 0%, #C698F4 100%);
  border: none;
  border-radius: 24px;
  opacity: 1;
  
  /* Drop Shadow */
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.52);
  
  /* Text */
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  
  /* Transition */
  transition: all 0.3s ease;
}

.follow-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.follow-button:active {
  transform: translateY(0);
}

.follow-button.following {
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
}

.follow-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .follow-button {
    width: 200px;
    height: 80px;
    font-size: 16px;
  }
}
