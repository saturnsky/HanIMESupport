// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 부드러운 스크롤 네비게이션
    initSmoothScrolling();
});

// CSS Pseudo Elements로 표시된 이메일 주소 복사 기능
window.copyPseudoEmail = function(element) {
    // CSS pseudo elements에서 표시되는 이메일 주소
    const email = 'developer@saturnsky.io';
    
    // 클립보드 복사 시도 (fallback 우선)
    if (copyToClipboardFallback(email)) {
        showCopySuccess(element);
    } else {
        // 최신 API 시도 (HTTPS 환경에서만)
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
                showCopySuccess(element);
            }).catch(err => {
                console.error('클립보드 복사 실패:', err);
                showCopyError(element);
            });
        } else {
            showCopyError(element);
        }
    }
};

// 클립보드 복사 대체 방법 (더 안정적)
function copyToClipboardFallback(text) {
    try {
        // 텍스트 영역 생성
        const textArea = document.createElement('textarea');
        textArea.value = text;
        
        // 화면에 보이지 않도록 설정
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        // 복사 실행
        const result = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        return result;
    } catch (err) {
        console.error('클립보드 복사 실패:', err);
        return false;
    }
}

// 복사 성공 메시지 표시
function showCopySuccess(element) {
    const hintElement = element.querySelector('.email-copy-hint') || element;
    const originalText = hintElement.textContent;
    
    // pseudo elements 비활성화 (푸터의 경우)
    if (element.classList.contains('footer-email-pseudo')) {
        element.classList.add('copying');
    }
    
    hintElement.textContent = '복사되었습니다! ✓';
    hintElement.classList.add('email-copy-success');
    
    setTimeout(() => {
        hintElement.textContent = originalText;
        hintElement.classList.remove('email-copy-success');
        
        // pseudo elements 복원 (푸터의 경우)
        if (element.classList.contains('footer-email-pseudo')) {
            element.classList.remove('copying');
        }
    }, 2000);
}

// 복사 실패 메시지 표시
function showCopyError(element) {
    const hintElement = element.querySelector('.email-copy-hint') || element;
    const originalText = hintElement.textContent;
    
    // pseudo elements 비활성화 (푸터의 경우)
    if (element.classList.contains('footer-email-pseudo')) {
        element.classList.add('copying');
    }
    
    hintElement.textContent = '복사 실패 (직접 선택해 주세요)';
    hintElement.style.color = 'var(--error-color, #ff3b30)';
    
    setTimeout(() => {
        hintElement.textContent = originalText;
        hintElement.style.color = '';
        
        // pseudo elements 복원 (푸터의 경우)
        if (element.classList.contains('footer-email-pseudo')) {
            element.classList.remove('copying');
        }
    }, 3000);
}

// 템플릿 토글 기능 (전역 함수)
window.toggleTemplate = function(templateId) {
    const templateContent = document.getElementById(templateId);
    const templateHeader = templateContent.previousElementSibling;
    
    // 현재 템플릿의 상태 토글
    const isActive = templateContent.classList.contains('active');
    
    // 모든 템플릿 닫기
    document.querySelectorAll('.template-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.template-header').forEach(header => {
        header.classList.remove('active');
    });
    
    // 현재 템플릿이 닫혀있었다면 열기
    if (!isActive) {
        templateContent.classList.add('active');
        templateHeader.classList.add('active');
    }
};

// 클립보드 복사 기능 (전역 함수) - 템플릿용
window.copyToClipboard = function(element) {
    const text = element.textContent;
    const indicator = element.nextElementSibling;
    const originalText = indicator.textContent;
    
    // 클립보드 복사 시도 (fallback 우선)
    if (copyToClipboardFallback(text)) {
        // 성공 메시지 표시
        indicator.textContent = '복사되었습니다! ✓';
        indicator.classList.add('copy-success');
        
        setTimeout(() => {
            indicator.textContent = originalText;
            indicator.classList.remove('copy-success');
        }, 2000);
    } else {
        // 최신 API 시도
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                indicator.textContent = '복사되었습니다! ✓';
                indicator.classList.add('copy-success');
                
                setTimeout(() => {
                    indicator.textContent = originalText;
                    indicator.classList.remove('copy-success');
                }, 2000);
            }).catch(err => {
                console.error('클립보드 복사 실패:', err);
                indicator.textContent = '복사 실패 (직접 선택해 주세요)';
                indicator.style.color = 'var(--error-color, #ff3b30)';
                
                setTimeout(() => {
                    indicator.textContent = originalText;
                    indicator.style.color = '';
                }, 3000);
            });
        } else {
            indicator.textContent = '복사 실패 (직접 선택해 주세요)';
            indicator.style.color = 'var(--error-color, #ff3b30)';
            
            setTimeout(() => {
                indicator.textContent = originalText;
                indicator.style.color = '';
            }, 3000);
        }
    }
};

// 부드러운 스크롤 네비게이션
function initSmoothScrolling() {
    // 앵커 링크에 대한 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


// 폼 유효성 검사
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            
            // 에러 상태 제거 (포커스 시)
            field.addEventListener('focus', function() {
                this.classList.remove('error');
            }, { once: true });
        }
    });
    
    return isValid;
}

// 이메일 형식 검증
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 키보드 네비게이션 지원
document.addEventListener('keydown', function(e) {
    // Escape 키로 메시지 닫기
    if (e.key === 'Escape') {
        const messages = document.querySelectorAll('.status-message');
        messages.forEach(message => {
            if (message.classList.contains('show')) {
                message.classList.remove('show');
                setTimeout(() => {
                    if (message.parentNode) {
                        message.parentNode.removeChild(message);
                    }
                }, 300);
            }
        });
    }
});

// CSS 추가 (동적으로 스타일 추가)
const additionalStyles = `
.status-message {
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: 400px;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
}

.status-message.success {
    background: #34c759;
    color: white;
}

.status-message.error {
    background: #ff3b30;
    color: white;
}

.status-message.show {
    opacity: 1;
    transform: translateX(0);
}

.message-content {
    display: flex;
    align-items: center;
    gap: 12px;
}

.message-icon {
    font-size: 1.2rem;
}

.message-text {
    font-weight: 500;
}

.form-group input.error,
.form-group textarea.error {
    border-color: #ff3b30;
    box-shadow: 0 0 0 3px rgba(255, 59, 48, 0.1);
}

@media (max-width: 480px) {
    .status-message {
        top: 10px;
        right: 10px;
        left: 10px;
        max-width: none;
        transform: translateY(-100%);
    }
    
    .status-message.show {
        transform: translateY(0);
    }
}
`;

// 스타일 추가
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);