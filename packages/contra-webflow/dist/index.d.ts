/**
 * Webflow Runtime for Contra Experts
 * Features: Performance optimization, filtering, error handling, loading states
 */
interface RuntimeConfig {
    apiKey: string;
    debug?: boolean;
    loadingClass?: string;
    errorClass?: string;
    emptyClass?: string;
    autoReload?: boolean;
    debounceDelay?: number;
    maxRetries?: number;
    paginationMode?: 'traditional' | 'infinite' | 'hybrid';
    infiniteScrollThreshold?: number;
    preloadNextPage?: boolean;
    maxCachedPages?: number;
    smoothScrollBehavior?: 'auto' | 'smooth';
    loadMoreText?: string;
    videoAutoplay?: boolean;
    videoHoverPlay?: boolean;
    videoMuted?: boolean;
    videoLoop?: boolean;
    videoControls?: boolean;
}
/**
 * Main Runtime Class
 */
declare class ContraWebflowRuntime {
    private client;
    private config;
    private state;
    private debouncedReload;
    constructor(config: RuntimeConfig);
    /**
     * Initialize the runtime and find all expert containers
     */
    init(): Promise<void>;
    /**
     * Initialize a single expert container
     */
    private initContainer;
    /**
     * Setup container with initial state and classes
     */
    private setupContainer;
    /**
     * Determine pagination mode from container attributes or config
     */
    private determinePaginationMode;
    /**
     * Setup pagination system based on mode
     */
    private setupPagination;
    /**
     * Setup infinite scroll functionality
     */
    private setupInfiniteScroll;
    /**
     * Setup traditional pagination button states
     */
    private setupTraditionalPagination;
    /**
     * Setup load more button for infinite scroll
     */
    private setupLoadMoreButton;
    /**
     * Wire up filter controls to auto-update
     */
    private wireFilterControls;
    /**
     * Wire up action buttons (pagination, sorting, etc.)
     */
    private wireActionButtons;
    /**
     * Load experts for a program
     */
    private loadExperts;
    /**
     * Render experts into the container
     */
    private renderExperts;
    /**
     * Populate expert card from template
     */
    private populateExpertCard;
    /**
     * Populate data fields in the card
     */
    private populateFields;
    /**
     * Set element value with proper formatting
     */
    private setElementValue;
    /**
     * Star rating rendering with optional text display
     */
    private renderStarRating;
    /**
     * Media type detection and element handling
     */
    private isMediaField;
    /**
     * Media value setting with automatic type detection
     */
    private setMediaValue;
    /**
     * Detect media type from URL
     */
    private detectMediaType;
    /**
     * Create video element with fallback
     */
    private createVideoElement;
    /**
     * Create image element with error handling
     */
    private createImageElement;
    /**
     * Extract video thumbnail from Cloudinary URL
     */
    private extractVideoThumbnail;
    /**
     * Transfer attributes and classes from old element to new
     */
    private transferAttributes;
    /**
     * Handle repeating elements (projects, social links)
     */
    private populateRepeatingElements;
    /**
     * Populate a repeating container with items
     */
    private populateRepeatingContainer;
    /**
     * Handle conditional display based on data
     */
    private handleConditionalDisplay;
    /**
     * Evaluate a condition against expert data
     */
    private evaluateCondition;
    /**
     * Update UI states based on current data
     */
    private updateUIStates;
    /**
     * Handle action buttons (pagination, sorting, etc.)
     */
    private handleAction;
    /**
     * Load more experts - unified method for all pagination modes
     */
    private loadMoreExperts;
    /**
     * Update load more button state
     */
    private updateLoadMoreButtonState;
    /**
     * Load next page for infinite scroll
     */
    private loadNextPageInfinite;
    /**
     * Update pagination control states
     */
    private updatePaginationControls;
    /**
     * Update infinite loading state
     */
    private updateInfiniteLoadingState;
    /**
     * Render new experts for infinite scroll (append mode)
     */
    private renderNewExperts;
    /**
     * Utility Methods
     */
    private getAttr;
    private querySelector;
    private querySelectorAll;
    private findExpertContainers;
    private parseFiltersFromElement;
    private getControlValue;
    private updateFilter;
    private showLoading;
    private showError;
    private dispatchEvent;
    private log;
}

export { ContraWebflowRuntime };
